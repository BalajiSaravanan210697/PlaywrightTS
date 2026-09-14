import test from "@playwright/test";

test('select option from dropdown', async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator('#username').fill("democsr")

    await page.locator('#password').fill('crmsfa')
    
    await page.locator('.decorativeSubmit').click()
    //click the CRM/SFA button
    await page.locator('a[href*="/crmsfa/control/main"]').nth(1).click()
    // click create lead button
    await page.locator('text=Create Lead').nth(0).click()

    let sourceValues= page.locator('[id=createLeadForm_dataSourceId]')
    let sourceCount = await sourceValues.count()

    for(let i=0; i<sourceCount;i++){
      console.log(await sourceValues.nth(i).innerText());  
    }
});