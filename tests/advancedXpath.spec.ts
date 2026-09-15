/* Write the typescript code to login to Salesforce application using Advanced Xpaths.

https://login.salesforce.com/?locale=in
Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025

https://login.salesforce.com/ */

import test, { expect } from "@playwright/test";

test("advanced xpath", async ({ page }) => {
  //launch the salesforce url
  await page.goto("https://login.salesforce.com/");

  //entering username
  await page
    .locator('//div[@id="username_container"]/input[1]')
    .fill("dilipkumar.rajendran@testleaf.com");

  //click login button
  await page.locator('//input[@id="Login"]').click();

  //enter password
  await page
    .locator("//label[text()='Password']/following::input[@id='password']")
    .fill("TestLeaf@2025");

  //click login button
  await page.locator('//input[@id="Login"]').click();

  //getTitle of the Home Page
  console.log(await page.title());
  console.log(page.url());
});
