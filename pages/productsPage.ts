import {Page, Locator, expect} from '@playwright/test';

export class ProductsPage {
constructor (private readonly page:Page){ }


getSearchBox(): Locator{
return this.page.locator('#search_product');
};

getSearchIcon(): Locator{
return this.page.locator('[class="fa fa-search"]');
};

getViewProductButton(): Locator{
return this.page.locator('[href="/product_details/2"]');
}

async clickViewProductButton(){
await this.getViewProductButton().click();
}

async clickSearchIcon(){
await this.getSearchBox().click()
}

async fillProductsBox(product:string){
await this.getSearchBox().fill(product);
}




}