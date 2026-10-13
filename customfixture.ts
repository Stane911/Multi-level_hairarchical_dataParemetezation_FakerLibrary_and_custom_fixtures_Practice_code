import { test as base } from "@playwright/test";
import { LoginPage } from "../Pages/loginpage";
import { welcomePage } from "../Pages/welcomePage";
import { HomePage } from "../Pages/homePage";
import { LeadPage } from "../Pages/LeadPage";
import { CreateLead } from "../Pages/createLead";
import { ViewLead } from "../Pages/viewLead";


type myFixture={
    loginFix:LoginPage
    welcomefix:welcomePage
    homefix:HomePage
    leadfix:LeadPage
    createLeadfix:CreateLead
    viewfix:ViewLead
}

export const test = base.extend<myFixture>({

loginFix: async ({ page }, use) => {
let lpo= new LoginPage(page)
        await use(lpo);
    },


welcomefix: async ({ page }, use) => {
let wpo= new welcomePage(page)
        await use(wpo)
    }, 

homefix: async ({ page }, use) => {
let hpo= new HomePage(page)
        await use(hpo)
    },
leadfix: async ({ page }, use) => {
let lpo= new LeadPage(page)
        await use(lpo)
    },
createLeadfix: async ({ page }, use) => {
let clpo= new CreateLead(page)
        await use(clpo)
    },
viewfix: async ({ page }, use) => {
let vpo= new ViewLead(page)
        await use(vpo)
    }

})