import test, { expect } from "@playwright/test";

test("Create Lead in SF Application", async ({ page }) => {
  await page.goto("https://login.salesforce.com/");

  await page
    .locator('//input[@id="username"]')
    .fill("balajisaravanan210697.3210795b6c1f@agentforce.com");

  await page.locator("#Login").click();

  await page
    .locator('//label[text()="Password"]/following::input[@id="password"]')
    .fill("Balaji@008");

  await page.locator("#Login").click();

  await page.locator(".slds-icon-waffle").click();

  await page.waitForLoadState("domcontentloaded");

  await page.locator('//button[text()="View All"]').click();

  await page.waitForLoadState("domcontentloaded");

  await page.locator('//p[text()="Sales"]').click();

  await page.locator('//span[text()="Leads"]').nth(0).click();

  await page.locator("button[name=New]").click();

  const lastName = "Steve";

  await page.locator('input[name="lastName"]').fill(lastName);

  await page.locator('input[name="Company"]').fill("TestLeaf");

  await page.locator('//button[text()="Save"]').nth(1).click();

  const toastMessage = page.locator(".toastMessage");

  await expect(toastMessage).toHaveText(`Lead "${lastName}" was created.`);
});
