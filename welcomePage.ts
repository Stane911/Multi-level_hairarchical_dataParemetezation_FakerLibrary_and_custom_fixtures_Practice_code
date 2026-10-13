//clickin gon CRM/SFA

import { Playwrightwrapper } from "../helper/playwrightWrapper";
import { LoginPage } from "./loginpage";


export class welcomePage  extends Playwrightwrapper{

    async clickonCRMSFA() {await this.Click('text=CRM/SFA') }

    async clickonLogout() {await this.Click('.decorativeSubmit')}
}











// {
//     async clickonCRMSFA() {await this.page.locator('text=CRM/SFA').click() }

//     async clickonLogout() {await this.page.locator('.decorativeSubmit').click()}