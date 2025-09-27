import {Page, Locator, expect} from '@playwright/test';

export class CartPage {
constructor (private readonly page:Page){ }

getProductRow(): Locator{
return this.page.locator('#product-2').first();
}

getProductDescriptionElement(): Locator{
return this.getProductRow().locator('[href="/product_details/2"]');
}

getProductQuantity(): Locator{
return this.getProductRow().getByRole('button');
}

getProductTotal(): Locator{
return this.getProductRow().locator('[class="cart_total_price"]')

}

}