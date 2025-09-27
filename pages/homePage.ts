import {Page, Locator, expect} from '@playwright/test';

export class HomePage {
constructor (private readonly page:Page){ }

async  open(): Promise<void> {
    await this.page.goto('/');
}


getProductButton(): Locator{
return this.page.locator('[href ="/products"]');
}

getAutomationHeader():Locator{
    return this.page.locator('')
}


async clickProduct(){
await this.getProductButton().click();
}


}