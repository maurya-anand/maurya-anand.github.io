import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const ssrDir = path.resolve("dist-ssr");

const { render } = await import(path.join(ssrDir, "entry-server.js"));

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf-8");
const appHtml = render();
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

fs.writeFileSync(templatePath, html);
fs.rmSync(ssrDir, { recursive: true, force: true });
