import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const pdfPath = path.resolve(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const legacyPdfPath = path.resolve(root, "public", "Mickoll_Marin_CV.pdf");

if (!existsSync(pdfPath)) {
  throw new Error(`Missing ${path.relative(root, pdfPath)}. Generate it first with "npm run pdf:cv".`);
}

if (!existsSync(legacyPdfPath)) {
  throw new Error(`Missing legacy route file ${path.relative(root, legacyPdfPath)}. Generate it first with "npm run pdf:cv".`);
}

function run(command, args) {
  return spawnSync(command, args, {
    encoding: "utf8",
    windowsHide: true,
    maxBuffer: 20 * 1024 * 1024,
  });
}

function extractWithPdfToText() {
  const result = run("pdftotext", ["-layout", pdfPath, "-"]);
  if (result.status === 0 && result.stdout.trim()) {
    return result.stdout;
  }
  return null;
}

function extractWithPython(command, argsPrefix = []) {
  const code = `
import sys
try:
    import fitz
except Exception as exc:
    print("PYMUPDF_IMPORT_ERROR:" + str(exc), file=sys.stderr)
    sys.exit(2)
doc = fitz.open(sys.argv[1])
print("\\n".join(page.get_text() for page in doc))
`;
  const result = run(command, [...argsPrefix, "-c", code, pdfPath]);
  if (result.status === 0 && result.stdout.trim()) {
    return result.stdout;
  }
  return null;
}

function metadataWithPython(command, argsPrefix = []) {
  const code = `
import json, sys
try:
    import fitz
except Exception as exc:
    print("PYMUPDF_IMPORT_ERROR:" + str(exc), file=sys.stderr)
    sys.exit(2)
doc = fitz.open(sys.argv[1])
print(json.dumps(doc.metadata or {}))
`;
  const result = run(command, [...argsPrefix, "-c", code, pdfPath]);
  if (result.status === 0 && result.stdout.trim()) {
    return JSON.parse(result.stdout);
  }
  return null;
}

function extractText() {
  return (
    extractWithPdfToText() ??
    extractWithPython("python") ??
    extractWithPython("py", ["-3.12"]) ??
    extractWithPython("py", ["-3"])
  );
}

const text = extractText();
if (!text) {
  throw new Error(
    "Could not extract text from the CV PDF. Install pdftotext or make PyMuPDF available in Python, then rerun npm run pdf:verify."
  );
}

const metadata =
  metadataWithPython("py", ["-3.12"]) ??
  metadataWithPython("py", ["-3"]) ??
  metadataWithPython("python");

const required = [
  "Mickoll Marin",
  "Amazon",
  "PriceLabs",
  "PerchPeek",
  "EF SET",
  "79/100",
  "Product Specialist",
  "Customer Success Specialist",
  "Area Manager",
  "Logistics Specialist",
  "Implementation",
  "Spanish",
  "English",
  "Portuguese",
];

const requiredGroups = [
  ["Product Operations", "Product Ops"],
  ["Data Operations", "RevOps"],
];

const forbidden = [
  ["sal", "ary"].join(""),
  ["Quick", " CV"].join(""),
  ["Deep", " Dive"].join(""),
  ["Project", " steps"].join(""),
  ["undef", "ined"].join(""),
  "[red" + "acted]",
  "TO" + "DO",
  "lor" + "em",
  "automation work.Manager",
  "Download CV CV",
  "mickoll-interactive-ijdca54lo",
  "otchos-projects",
];

const lowerText = text.toLowerCase();
const missing = required.filter((item) => !lowerText.includes(item.toLowerCase()));
for (const group of requiredGroups) {
  if (!group.some((item) => lowerText.includes(item.toLowerCase()))) {
    missing.push(group.join(" or "));
  }
}

const foundForbidden = forbidden.filter((item) => lowerText.includes(item.toLowerCase()));

const metadataErrors = [];
if (!metadata) {
  metadataErrors.push("Could not read PDF metadata with PyMuPDF.");
} else {
  if (metadata.title !== "Mickoll Marin CV") {
    metadataErrors.push(`Expected PDF title "Mickoll Marin CV", found "${metadata.title || ""}".`);
  }
  if (metadata.author !== "Mickoll Marin") {
    metadataErrors.push(`Expected PDF author "Mickoll Marin", found "${metadata.author || ""}".`);
  }
}

if (missing.length || foundForbidden.length || metadataErrors.length) {
  const messages = [];
  if (missing.length) {
    messages.push(`Missing expected text: ${missing.join(", ")}`);
  }
  if (foundForbidden.length) {
    messages.push(`Found forbidden text: ${foundForbidden.join(", ")}`);
  }
  if (metadataErrors.length) {
    messages.push(metadataErrors.join("\n"));
  }
  throw new Error(messages.join("\n"));
}

console.log(`Verified ${path.relative(root, pdfPath)} text content.`);
