import test from "@playwright/test";

test.use({
    storageState:'Data/leaftaps.json'
})

test("skip login for leaftaps",async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/login")

    console.log(await page.title());
    console.log(page.url());
    
    
    
})