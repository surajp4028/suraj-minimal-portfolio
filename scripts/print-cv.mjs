// Regenerates public/Suraj-Pandey-CV.pdf from the /resume page.
// Usage: npm run build && npm start   (in another terminal)  then  npm run cv:pdf
import puppeteer from "puppeteer-core";

const url = process.env.CV_URL ?? "http://localhost:3000/resume";
const executablePath =
  process.env.BROWSER_PATH ??
  "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const browser = await puppeteer.launch({ executablePath, headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0" });
await page.emulateMediaType("print");
await page.evaluate(() => {
  document.documentElement.classList.remove("dark");
  document.documentElement.style.colorScheme = "light";
});
await page.pdf({
  path: "public/Suraj-Pandey-CV.pdf",
  format: "A4",
  printBackground: true,
  margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" },
});
await browser.close();
console.log("Wrote public/Suraj-Pandey-CV.pdf");
