import {test} from '@playwright/test'
import  dotenv from 'dotenv'

let filename = process.env.envfile || 'qa' || 'stage' || 'prod'
dotenv.config({path: `Data/${filename}.env`})

let URL = process.env.sf_url as string
let UserName = process.env.sf_username as string
let PassWord = process.env.sf_password as string

test('reading data from env',async ({page}) => {

    await page.goto(URL)
    await page.locator('#username').fill(UserName)
    await page.locator('#Login').click()
    await page.locator('#password').fill(PassWord)
    await page.locator('#Login').click()

})