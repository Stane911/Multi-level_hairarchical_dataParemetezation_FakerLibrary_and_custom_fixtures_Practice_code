import {test} from "@playwright/test"

test('auth file to skip the login', async ({page}) => {


await page.goto('https://login.salesforce.com/')

page.waitForLoadState('domcontentloaded')

await page.locator('#username').fill('rafastane.847ef43f387c@agentforce.com')

await page.locator('#Login').click()

await page.locator('#password').fill('Angelin@19')

await page.locator('#Login').click()
await page.pause();

await page.waitForLoadState('domcontentloaded')

await page.context().storageState({path:'Data/sflogin.json'})
    
});
