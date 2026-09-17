import test from "@playwright/test";

test("store the login infos",async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator('#username').fill('balajisaravanan210697.3210795b6c1f@agentforce.com')

    await page.locator('#Login').click()

    await page.locator('#password').fill('Balaji@008')

    await page.locator('#Login').click()

    await page.context().storageState({path:'Data/sflogin.json'})
    
})