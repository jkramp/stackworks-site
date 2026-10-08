#!/usr/bin/env node
// Renders privacy.md into privacy/index.html for GitHub Pages: node build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { marked } from "marked";

const page = (title, body) => `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="icon" href="/stackworks-site/icon.png">
<style>
  body { margin: 0; background: #0b0c14; color: #e6e8f0; font: 17px/1.65 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  main { max-width: 680px; margin: 0 auto; padding: 40px 22px 64px; }
  h1 { font-size: 2rem; line-height: 1.2; margin: 0 0 4px; }
  h2 { font-size: 1.15rem; margin: 2em 0 0.4em; color: #5ff2ff; }
  a { color: #5ff2ff; }
  em { color: #9aa0b8; font-style: normal; }
  header img { width: 72px; height: 72px; border-radius: 18px; display: block; margin-bottom: 18px; }
</style>
<main>
<header><a href="/stackworks-site/"><img src="/stackworks-site/icon.png" alt="StackWorks"></a></header>
${body}
</main>
</html>
`;

writeFileSync("privacy/index.html", page("StackWorks privacy policy", marked.parse(readFileSync("privacy.md", "utf8"))));
console.log("privacy/index.html written");
