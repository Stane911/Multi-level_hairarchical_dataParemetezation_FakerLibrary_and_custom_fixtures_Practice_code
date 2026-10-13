import {test} from "../helper/customfixture"

// import {test} from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"
import { ViewLead } from "../Pages/viewLead"
import { welcomePage } from "../Pages/welcomePage"
import { HomePage } from "../Pages/homePage"
import { LeadPage } from "../Pages/LeadPage"
import { CreateLead } from "../Pages/createLead"
import dotenv from "dotenv"
import data from "./Data/leafLogin.json"

dotenv.config({path:'Data/leafLoginProd.env'})

//test ('pwwrapper method on hairarchical inheritance with faker library',async ({page}) => {
test ('pwwrapper method on hairarchical inheritance with faker library',async ({
    loginFix,
    welcomefix,
    homefix,
    leadfix,
    createLeadfix,
    viewfix

})=>{


// let lp=new LoginPage(page)
// await lp.LoadpageUrl(process.env.TD_url as string) // PASS ENV FILE VALUE FOR URL // DATA PARAMETERIZATION
// await lp.Credentials(data[0].username, data[0].password) // PASS JSON FILE UN AND PW //DATA PARAMETERIZATION
// await lp.clickonlogin()
await loginFix.LoadpageUrl(process.env.TD_url as string) // PASS ENV FILE VALUE FOR URL // DATA PARAMETERIZATION
await loginFix.Credentials(data[0].username, data[0].password) // PASS JSON FILE UN AND PW //DATA PARAMETERIZATION
await loginFix.clickonlogin()


//let wp=new welcomePage(page)
//await wp.clickonCRMSFA()
await welcomefix.clickonCRMSFA()

//let hp=new HomePage(page)
//await hp.clickOnLeadsbutton()
await homefix.clickOnLeadsbutton()


//let leadP=new LeadPage(page)
//await leadP.clickonCreateLeadbutton()
await leadfix.clickonCreateLeadbutton()

//let cl=new CreateLead(page)
//let cName=await cl.enterMandatoryFields()
let fName=await createLeadfix.enterMandatoryFields()
//let lName=await cl.enterMandatoryFields()
await createLeadfix.clicksubmitbutton();

//let vp=new ViewLead(page)
//await vp.verifyLead(cName)
await viewfix.verifyLead(fName)
//await vp.verifyLead(lName)
await viewfix.verifyLead(fName)
})


// so by using wrapper method we did the thing//// THE ABOVE is demonstration of Hairarachical InHERITANCE/ DATA PARAMETERIZATION DONE// 

// UP NEXT WE ARE GOING TO USE FAKER LIBRARY AND ENTER 50-100 RECORDS TO PASS IN.
//FAKER LIBRARY CONCEPT//





// the below steps ARE FOR MULTI LEVEL INHERITANCE 
// object is created in the spec file ///
// let oj= new LoginPage(page)
// await oj.LoadpageUrl("https://leaftaps.com/opentaps/control/main") 
// await oj.Credentials("democsr","crmsfa")
// await oj.clicklogin()
// // unable to find login pagew what should we do now?
//we need to export class and import inspec file 
// we need to remove browser // since we are inside spec file and we have one inbuile