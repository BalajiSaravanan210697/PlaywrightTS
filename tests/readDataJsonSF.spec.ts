import test from "@playwright/test";
import path from "../Data/login.json";

for (let credentials of path) {
  test(`reading data from json for SF ${credentials.tcid}`, async ({page,}) => {
    await page.goto("https://login.salesforce.com/");
    
    await page.locator('#username').fill(credentials.username)
    console.log(credentials.username);
    await page.locator('#Login').click()
    await page.locator('#password').fill(credentials.password)
    console.log(credentials.password);
    await page.locator('#Login').click()

  });
}
