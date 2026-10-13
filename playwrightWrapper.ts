 
import { Page} from "@playwright/test"


export abstract class Playwrightwrapper {
page:Page

constructor(tpage:Page){    this.page=tpage     }


async loadApplication(url:string){
    try{

    await this.page.goto(url)
console.log("login Success")
}
catch{
    throw new Error("Login failed")
}

}

async clearandfill(locator:string,data:string)

{
    await this.page.locator(locator).clear()
     await this.page.locator(locator).fill(data)

}

async Click(locator:string){

    await this.page.locator(locator).click()
}


}
















