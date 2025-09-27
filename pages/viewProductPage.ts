import {Page, Locator, expect} from '@playwright/test';

export class ViewProduct {
constructor (private readonly page:Page){ }


getQuantityButton(): Locator{
return this.page.locator('#quantity');
}

getAddToCartButton(): Locator{
return this.page.getByRole('button',{name:'Add to cart'});
}

getViewCartButton(): Locator{
return this.page.locator('[href="/view_cart"]').filter({hasText: 'View Cart'});
}

async clickViewCartButton() {
    await this.getViewCartButton().click();
}

async clickAddToCart() {
    await this.getAddToCartButton().click();
}


async setQuantity(quantityValue: string) {
    await this.getQuantityButton().fill(quantityValue);
}

}
