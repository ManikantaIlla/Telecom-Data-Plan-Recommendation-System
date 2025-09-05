import { stringify } from "node:querystring";

export function exportCSV(rows) {
  if (!rows?.length) return "";
  const headers = Object.keys(rows[0]);
  const lines = [headers.join(",")];
  for (const r of rows) lines.push(headers.map(h => JSON.stringify(r[h] ?? "")).join(","));
  return lines.join("\n");
}

// PDF export would typically use pdfkit or puppeteer; left as a stub.
export function exportPDFPlaceholder() {
  return Buffer.from("PDF export coming soon");
}
