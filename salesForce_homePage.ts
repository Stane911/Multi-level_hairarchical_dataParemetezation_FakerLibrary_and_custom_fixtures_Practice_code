import { SalesforceLoginPage } from "./SalesForce_loginPage"


export class SalesforceHomePage extends SalesforceLoginPage   {

async homePageactions(){


await this.page.getByRole('button',{name: 'App Launcher'}).click()
await this.page.locator('//button[@class="slds-button"]').nth(1).click()
await this.page.locator('//input[@class="slds-input"]').fill('Leads')
await this.page.locator('//a[@data-label="Leads"]').click()

}
}

