import { Playwrightwrapper } from "../helper/playwrightWrapper";
import { welcomePage } from "./welcomePage";


export class HomePage extends Playwrightwrapper{
    
    async clickOnLeadsbutton(){     await this.Click('//a[text()="Leads"]')

}
}

    //async clickOnLeadsbutton(){     await this.page.locator('//a[text()="Leads"]').click()     }