import { Playwrightwrapper } from "../helper/playwrightWrapper";
import { HomePage } from "./homePage";

export class LeadPage extends Playwrightwrapper
{


  async clickonCreateLeadbutton(){  await this.Click('//a[text()="Create Lead"]')

}
}

  //async clickonCreateLeadbutton(){  await this.page.locator('//a[text()="Create Lead"]').click() }