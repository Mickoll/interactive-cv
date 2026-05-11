import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const sourcePath = path.resolve(root, "public", "Mickoll_Marin_CV.pdf");
const atsPath = path.resolve(root, "public", "Mickoll_Marin_CV_ATS.pdf");
const expectedSource = path.join(root, "public", "Mickoll_Marin_CV.pdf");
const expectedAts = path.join(root, "public", "Mickoll_Marin_CV_ATS.pdf");

if (sourcePath !== expectedSource || atsPath !== expectedAts) {
  throw new Error("Refusing to write outside the expected public CV paths.");
}

if (!existsSync(sourcePath)) {
  throw new Error(`Missing ${path.relative(root, sourcePath)}. Put the ATS CV source PDF there first.`);
}

copyFileSync(sourcePath, atsPath);

const metadataScript = `
import sys
try:
    import fitz
except Exception as exc:
    print("PYMUPDF_IMPORT_ERROR:" + str(exc), file=sys.stderr)
    sys.exit(2)

for pdf_path in sys.argv[1:]:
    doc = fitz.open(pdf_path)
    metadata = doc.metadata or {}
    metadata.update({
        "title": "Mickoll Marin CV",
        "author": "Mickoll Marin",
        "subject": "ATS-friendly CV",
        "keywords": "Implementation Consultant, Solutions Consultant, Technical Consultant, Product Operations, RevOps, Pricing Analyst, BI Data Analyst, SaaS, Operations Automation",
    })
    doc.set_metadata(metadata)
    tmp_path = pdf_path + ".tmp"
    doc.save(tmp_path, garbage=4, deflate=True)
    doc.close()
    import os
    os.replace(tmp_path, pdf_path)
`;

function run(command, args) {
  return spawnSync(command, args, {
    encoding: "utf8",
    windowsHide: true,
    maxBuffer: 20 * 1024 * 1024,
  });
}

const attempts = [
  ["py", ["-3.12", "-c", metadataScript, sourcePath, atsPath]],
  ["py", ["-3", "-c", metadataScript, sourcePath, atsPath]],
  ["python", ["-c", metadataScript, sourcePath, atsPath]],
];

const errors = [];
for (const [command, args] of attempts) {
  const result = run(command, args);
  if (result.status === 0) {
    console.log(`Prepared ${path.relative(root, atsPath)} from ${path.relative(root, sourcePath)} with ATS metadata.`);
    process.exit(0);
  }
  errors.push(`${command}: ${(result.stderr || result.stdout || `exit ${result.status}`).trim()}`);
}

throw new Error(`Could not set PDF metadata. Tried:\n${errors.map((error) => `- ${error}`).join("\n")}`);
