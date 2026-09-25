import test, { expect } from "@playwright/test";

test('upload a file in naukri',async ({page}) => {

    await page.goto('https://www.naukri.com/registration/createAccount')

    await page.locator('(//div[@class="iconWrap"])[1]').click()

    let fupload = page.locator('[type="file"]')
    fupload.setInputFiles('Data/Balaji_QA_Automation_Engineer_8+YOE.pdf')

    let fileuploadName = await page.locator('[class="file-name ellipsis"]').innerText()
    console.log(fileuploadName);

    await expect(page.locator('[class="file-name ellipsis"]')).toContainText('Balaji_QA_Automation_Engineer_8+YOE.pdf')
    
})