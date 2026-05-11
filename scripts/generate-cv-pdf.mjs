import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const sourceUrl = "http://localhost:3000/resume";
const outputPath = path.resolve(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const legacyOutputPath = path.resolve(root, "public", "Mickoll_Marin_CV.pdf");
const expectedOutput = path.join(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const expectedLegacyOutput = path.join(root, "public", "Mickoll_Marin_CV.pdf");

if (outputPath !== expectedOutput) {
  throw new Error(`Refusing to write PDF outside the expected public CV path: ${outputPath}`);
}

if (legacyOutputPath !== expectedLegacyOutput) {
  throw new Error(`Refusing to write PDF outside the expected legacy public CV path: ${legacyOutputPath}`);
}

async function assertServerIsReady() {
  try {
    const response = await fetch(sourceUrl, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    throw new Error(
      `Could not reach ${sourceUrl}. Run "npm run build" and "npm run start" in another terminal before running this script.\n${error}`
    );
  }
}

function browserCandidates() {
  const windowsPaths = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ];

  return [
    ...windowsPaths.filter(existsSync),
    "chrome",
    "chrome.exe",
    "msedge",
    "msedge.exe",
    "google-chrome",
    "chromium",
    "chromium-browser",
  ];
}

function runBrowser(candidate) {
  return new Promise((resolve) => {
    const userDataDir = path.join(tmpdir(), `mickoll-cv-print-${Date.now()}-${Math.random().toString(16).slice(2)}`);
    mkdirSync(userDataDir, { recursive: true });

    const args = [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      `--user-data-dir=${userDataDir}`,
      "--no-pdf-header-footer",
      `--print-to-pdf=${outputPath}`,
      sourceUrl,
    ];

    const child = spawn(candidate, args, { windowsHide: true });
    let stderr = "";

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      rmSync(userDataDir, { recursive: true, force: true });
      resolve({ ok: false, candidate, error: error.message });
    });

    child.on("close", (code) => {
      rmSync(userDataDir, { recursive: true, force: true });
      resolve({ ok: code === 0 && existsSync(outputPath), candidate, error: stderr.trim() || `exit code ${code}` });
    });
  });
}

await assertServerIsReady();
rmSync(outputPath, { force: true });
rmSync(legacyOutputPath, { force: true });

const failures = [];
for (const candidate of browserCandidates()) {
  const result = await runBrowser(candidate);
  if (result.ok) {
    copyFileSync(outputPath, legacyOutputPath);
    console.log(
      `Generated ${path.relative(root, outputPath)} and refreshed ${path.relative(root, legacyOutputPath)} using ${result.candidate}`
    );
    process.exit(0);
  }
  failures.push(`${result.candidate}: ${result.error}`);
}

throw new Error(
  `Could not find a working Chrome or Edge binary for headless PDF printing.\nTried:\n${failures
    .map((failure) => `- ${failure}`)
    .join("\n")}`
);
