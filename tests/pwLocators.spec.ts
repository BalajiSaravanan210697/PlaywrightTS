/* Classroom 1: Write the typescript code to login to Leaftaps application using Playwright locators.
------------

URL : https://leaftaps.com/opentaps/control/main
Username: democsr2
Password: crmsfa */
import {test,expect} from "@playwright/test";

test("playwright locators",async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.getByRole('textbox',{name:"Username"}).fill("democsr2")

    await page.getByRole('textbox',{name:"Password"}).fill("crmsfa")

    await page.getByRole('button',{name:"Login"}).click()

    await page.getByText("CRM/SFA").click()

    await page.getByRole('link',{name:"Leads"}).click()
    
})