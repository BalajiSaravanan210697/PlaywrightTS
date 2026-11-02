import test from "@playwright/test"

test("test login with valid credentials",async ({page}) => {

    await page.goto("https://demo.playwright.dev/todomvc/?utm_source=chatgpt.com#/")

    let firsttask = "Complete API Automation"
    let secondtask = "Complete UI Automation"

    await page.locator(".new-todo").fill(firsttask)
    await page.locator(".new-todo").press('Enter')

    await page.locator(".new-todo").fill(secondtask)
    await page.locator(".new-todo").press('Enter')

    await page.getByRole('checkbox',{name:"Toggle Todo"}).nth(0).click()

    await page.locator('a',{hasText:"Active"}).click()

    





    
})