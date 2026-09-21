import test from "@playwright/test";

test("Edit a Lead in LT application", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.locator('//input[@id="username"]').fill("democsr");

  await page.locator('//input[@name="PASSWORD"]').fill("crmsfa");

  await page.locator('//input[@class="decorativeSubmit"]').click();

  await page.locator("(//a[contains(text(),CRM/SFA)])[2]").click();

  await page.locator('//a[text()="Leads"]').click();
});
