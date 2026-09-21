import test from "@playwright/test";

test("login to SF application using css locators", async ({ page }) => {
  await page.goto("https://login.salesforce.com/?locale=in");

  await page.locator("#username").fill("balajisaravanan210697.3210795b6c1f@agentforce.com");

  await page.locator("#Login").click();

  await page.locator("#password").fill("Balaji@008");

  await page.locator("#Login").click();

  await page.waitForLoadState("domcontentloaded");

  let pageTitle = await page.title();
  console.log("Page Title is : " + pageTitle);

  let pageURL = page.url();
  console.log("Page URL is :" + pageTitle);
});
