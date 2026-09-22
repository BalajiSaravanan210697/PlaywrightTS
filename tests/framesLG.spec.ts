import { expect, test } from "@playwright/test";

test('frames interactions',async ({page}) => {

    await page.goto('https://leafground.com/frame.xhtml')

    const outerFrameLocator = page.frameLocator('[src="page.xhtml"]')

    const innerFrameLocator = outerFrameLocator.frameLocator('[src="framebutton.xhtml"]')
    
    let beforeClick = await innerFrameLocator.locator('#Click').innerText()
    console.log(beforeClick);
    expect(beforeClick).toBe('Click Me')

    await innerFrameLocator.locator('#Click').click()

    let afterClick = await innerFrameLocator.locator('#Click').innerText()
    console.log(afterClick);
    expect(afterClick).toBe('Hurray! You Clicked Me.')
    
    
}) 