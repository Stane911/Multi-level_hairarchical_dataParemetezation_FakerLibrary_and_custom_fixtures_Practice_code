import { Browser, chromium, Page, } from "@playwright/test"
import { Playwrightwrapper } from "../helper/playwrightWrapper"

export class LoginPage extends Playwrightwrapper {


async LoadpageUrl(url:string) 
{

await this.loadApplication(url)

}

async Credentials(UN:string,PW:string)
{
await this.clearandfill('#username',UN)
await this.clearandfill('#password',PW)

}

async clickonlogin()
{
await this.Click('.decorativeSubmit')
}

}





// the below steps are for  multi-level  inheritance //  login as parent and all pages are inheritinting 
// one be one using extends.. gp>P>C concept ,      not P> c1 > c2 (hair)

// async LoadpageUrl(url:string) 
// {
// await this.page.goto(url)
// }
// async Credentials(UN:string,PW:string)
// {
// await this.page.locator('#username').fill(UN)
// await this.page.locator('#password').fill(PW)
// }

// async clicklogin()
// {
// await this.page.locator('.decorativeSubmit').click()
// }

// async closeBrowser()
// {
// await this.page.close()
// }

// async function pageCreation() {
    
// let browser=await chromium.launch({headless:false})
// let context=await browser.newContext()
// let page=await context.newPage()


// let oj= new LoginPage(page)
// await oj.LoadpageUrl("https://leaftaps.com/opentaps/control/main") 
// await oj.Credentials("democsr","crmsfa")
// await oj.clicklogin()

// }
// pageCreation()




















