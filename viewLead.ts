import { expect } from "@playwright/test";
import { CreateLead } from "./createLead";
import { Playwrightwrapper } from "../helper/playwrightWrapper";

export class ViewLead extends Playwrightwrapper
{


async verifyLead(expectedvalue:string)
{

let Verify_firstName=await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
console.log(Verify_firstName)
console.log(expectedvalue)

expect(Verify_firstName).toContain(expectedvalue)
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText(expectedvalue)
}
}





// this is the code before using assertion on faker library inside it .


// async verifyLead()
// {

// let Verify_firstName=await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
// console.log(Verify_firstName)

// //non-retry assertion
// expect(Verify_firstName).toBe('Stane')

// //retry assertion 
// await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText('Stane')
// }