import test from "@playwright/test";

test("Create Lead in LT application using css Locators", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/main");

  await page.locator("#username").fill("democsr2");

  await page.locator(".inputLogin").nth(1).fill("crmsfa");

  await page.locator("input[type=submit]").click();

  await page.locator("a", { hasText: "CRM/SFA" }).click();

  await page.locator('a[href^="/crmsfa/control/leadsMain"]').click();

  await page.locator("a", { hasText: "Create Lead" }).click();

  await page.locator("#createLeadForm_companyName").fill("test leaf");

  await page.locator("#createLeadForm_firstName").fill("john");

  await page.locator("#createLeadForm_lastName").fill("davis");

  await page.locator('input[name="personalTitle"]').fill("Dr");

  await page.locator("#createLeadForm_generalProfTitle").fill("Mr");

  await page.locator("#createLeadForm_annualRevenue").fill("12 Lakhs");

  await page.locator("#createLeadForm_departmentName").fill("DEPT 5");

  let sourceValues = page.locator("#createLeadForm_dataSourceId>option");

  let sourceValueCount = await sourceValues.count();

  for (let index = 1; index < sourceValueCount; index++) {
    console.log(await sourceValues.nth(index).innerText());
  }

  await page.locator("#createLeadForm_primaryPhoneNumber").fill("8934535344");

  await page.locator('input[value="Create Lead"]').click();

  console.log("Page URL is : " + page.url());

  console.log("Page Title is : " + (await page.title()));
});
