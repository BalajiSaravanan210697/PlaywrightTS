/* Test Steps
Open Leaftaps application.
Enter username: democsr.
Enter password: crmsfa.
Click Login.
Save the login session using storageState.
Create a new test.
Load the saved storage state.
Open Leaftaps directly.
Verify that the Welcome/Home page is displayed.
Confirm that the login page is skipped. */
import test from "@playwright/test";

test("storage state for leaf taps",async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("democsr")

    await page.locator("#password").fill("crmsfa")

    await page.getByRole("button",{name:"Login"}).click()

    await page.context().storageState({path:'Data/leaftaps.json'})

})