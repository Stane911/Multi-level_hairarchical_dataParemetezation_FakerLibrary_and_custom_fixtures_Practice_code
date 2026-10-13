

import { expect } from "@playwright/test";
import { SalesforceHomePage } from "./salesForce_homePage";


export class SalesForceLeadPage extends SalesforceHomePage {

    
async leadPageActions(){

await this.page.locator('//button[@name="New"]').click()
await this.page.locator('//button[@name="salutation"]').click();
await this.page.getByRole('option', {name: 'Mr.',    exact: true}).click();
await this.page.locator('//input[@placeholder="Last Name"]').fill('stane')
await this.page.locator('//input[@name="Company"]').fill('Formula 1')
await this.page.locator('//button[@name="SaveEdit"]').click()

let verifyLead=await this.page.locator('//lightning-formatted-name[@slot="primaryField"]').nth(0).innerText()
console.log(verifyLead)

await expect(this.page.locator('//lightning-formatted-name[@slot="primaryField"]')).toHaveText('Mr. stane')
}

}

