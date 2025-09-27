import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../../features/support/world';

Given('I am on the homepage', async function (this:CustomWorld)
 {
    await this.home.open();
    
});

When('I Accept Cookies', async function (this:CustomWorld)
 {
    await this.consent.acceptCookies();

});

When('I navigate to Products page', async function (this:CustomWorld)
 {
    await this.home.clickProduct();

});

When('I search for {string}', async function(this:CustomWorld, product: string) 
{
    await this.product.fillProductsBox(product);
    await this.product.clickSearchIcon();

});

When('I View Product', async function(this:CustomWorld) 
{
    await this.product.clickViewProductButton();
});

When('I add {string} products', async function(this:CustomWorld, quantity: string) 
{
    await this.view.setQuantity(quantity);
});

When('I add product to Cart', async function(this:CustomWorld) 
{
    await this.view.clickAddToCart();
});

When('I navigate to Cart', async function(this:CustomWorld) 
{
    await this.view.clickViewCartButton();
});

Then('I should see the {string} product', async function(this:CustomWorld, product: string) 
{
    await expect(this.cart.getProductDescriptionElement()).toContainText(product)
});

Then('I see the total is now {string}', async function(this:CustomWorld, totalPrice: string) 
{
    await expect(this.cart.getProductTotal()).toContainText(totalPrice);
});

Then('I see the quantity is {string}', async function(this:CustomWorld, quantity: string) 
{
    await expect(this.cart.getProductQuantity()).toContainText(quantity);
});
