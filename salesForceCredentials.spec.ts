

import { test } from "@playwright/test";

import { SalesForceLeadPage } from "../Pages/salesForce_leadpage";

test.use({ storageState: 'Data/sflogin.json' });

test ('SFLogin and home Page action alome',async ({page}) => {

let Sf=new SalesForceLeadPage(page)

await Sf.LoadpageUrl("https://orgfarm-a473a9e2f4-dev-ed.develop.lightning.force.com/lightning/page/home")
// await Sf.enterUserName('rafastane.847ef43f387c@agentforce.com')
// await Sf.clickSFLogin()
// await Sf.enterUserPassword('Angelin@19')
// await Sf.clickSFLogin1()
await Sf.homePageactions()
await Sf.leadPageActions()
})