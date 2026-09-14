import test from "@playwright/test";

test('login to application',async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('#Login').click()

    await page.locator('#password').fill('TestLeaf@2025')

    await page.locator('#Login').click()

    let pageTitle= page.url()
    console.log("page title is :"+pageTitle);
    




    
})  