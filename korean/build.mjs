// Yig'ish: src/ dagi fayllarni bitta mustaqil index.html ga birlashtiradi.
//   node build.mjs            -> korean/index.html
//   node build.mjs <fayl>     -> qo'shimcha ravishda "qobiqsiz" sahifa (Artifact uchun)
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, "src");
const read = f => readFileSync(join(src, f), "utf8");
const data = readdirSync(src).filter(f => /^data-.*\.js$/.test(f)).sort().map(read).join("\n");
const js = "(() => {\n" + data + "\n" + read("app.js") + "\n})();";
const page = read("body.html").replace("/*CSS*/", () => read("styles.css")).replace("/*JS*/", () => js);

writeFileSync(join(root, "index.html"),
  '<!doctype html>\n<html lang="uz">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<style>body{margin:0}[hidden]{display:none!important}</style>\n</head>\n<body>\n' + page + "</body>\n</html>\n");
if (process.argv[2]) writeFileSync(process.argv[2], page);
console.log("OK", (page.length / 1024).toFixed(0) + " KB");
