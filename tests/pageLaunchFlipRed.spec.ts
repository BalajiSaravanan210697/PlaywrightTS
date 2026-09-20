import { test, chromium, webkit } from "@playwright/test";

test("page launch of redbus on Edge", async () => {
  let browser = await chromium.launch({ channel: "msedge" });

  let context = await browser.newContext();

  let page = await context.newPage();

  await page.goto("https://www.redbus.in/");

  let pageTitle = await page.title();

  console.log("PageTitle is : " + pageTitle);

  let pageURL = page.url();

  console.log("Page URL is : " + pageURL);
});

test.only("Launching Flipkart page on WebKit", async () => {
  let browser = await webkit.launch();

  let context = await browser.newContext();

  let page = await context.newPage();

  await page.goto("https://www.flipkart.com/");

  let pageTitle = await page.title();

  console.log("Page Title is : " + pageTitle);

  let pageURL = page.url();

  console.log("Page URL is : " + pageURL);
});
