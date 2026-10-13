import { Playwrightwrapper } from "../helper/playwrightWrapper";
import { LeadPage } from "./LeadPage";
import { faker, StringColorFormat } from "@faker-js/faker";

export class CreateLead extends Playwrightwrapper
{

//async enterMandatoryFields(cname:string,fname:string,lname:string)
async enterMandatoryFields()
{  
    //  await this.clearandfill('[id="createLeadForm_companyName"]',cname)
    // await this.clearandfill('[id="createLeadForm_firstName"]',fname)
    // await this.clearandfill('//input[@id="createLeadForm_lastName"]',lname)

    let cName=faker.company.name()
await this.clearandfill('[id="createLeadForm_companyName"]',cName)

    let fName=faker.person.firstName()
    await this.clearandfill('[id="createLeadForm_firstName"]',fName)

     let lName=faker.person.lastName()
    await this.clearandfill('//input[@id="createLeadForm_lastName"]',lName)

    //return cName
    return fName
    //return lName
}

async clicksubmitbutton(){       await this.Click('.smallSubmit')       }


}



// async enterMandatoryFields()
// {   await this.page.locator('[id="createLeadForm_companyName"]').fill("TestLeaf");
//     await this.page.locator('[id="createLeadForm_firstName"]').fill("Stane");
//     await this.page.locator('//input[@id="createLeadForm_lastName"]').fill('roy')
// }