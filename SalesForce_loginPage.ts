import { Browser, chromium, Page, } from "@playwright/test"

export class SalesforceLoginPage  {

page:Page

constructor(var_page:Page)           {     this.page=var_page                             }

async LoadpageUrl(url:string)        {  await this.page.goto(url)                         }

async enterUserName(UN:string)       {  await this.page.locator('#username').fill(UN)     }

async clickSFLogin()                 {  await this.page.locator('#Login').click()         }

async enterUserPassword(PW:string)   {  await this.page.locator('#password').fill(PW)     }

async clickSFLogin1()                {  await this.page.locator('#Login').click()         }

}




















