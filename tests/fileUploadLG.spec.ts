import test, { expect } from "@playwright/test";

test("file upload", async ({ page }) => {
  await page.goto("https://leafground.com/file.xhtml");

  let fileUpload = page.locator('(//input[@type="file"])[1]');
  fileUpload.setInputFiles("Data/Balaji_S_Photo.jpeg");

  await page.waitForLoadState("networkidle");
  let uploadedFileName = await page.locator('[class="ui-fileupload-filename"]').innerText();
  console.log(uploadedFileName);

  await expect(page.locator('[class="ui-fileupload-filename"]')).toHaveText("Balaji_S_Photo.jpeg 66.7 KB");
});
