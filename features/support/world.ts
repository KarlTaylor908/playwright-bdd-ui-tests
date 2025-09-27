import type { Browser, BrowserContext, Page } from 'playwright';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { HomePage } from '../../pages/homePage';
 import { Consent } from '../../pages/consent';
 import { ProductsPage } from '../../pages/productsPage';
 import { CartPage } from '../../pages/cartPage';
 import { ViewProduct } from '../../pages/viewProductPage';

export class CustomWorld extends World {

browser!: Browser;
context!: BrowserContext;
page!: Page;

private  _home?:HomePage;
private _product?:ProductsPage;
 private _consent?:Consent;
 private _view?:ViewProduct;
 private _cart?:CartPage;


get home(){return this._home ?? new HomePage (this.page);}
 get product(){return this._product ?? new ProductsPage (this.page);}
 get consent(){return this._consent ?? new Consent (this.page);}
 get view(){return this._view ?? new ViewProduct (this.page);}
 get cart(){return this._cart ?? new CartPage(this.page);}



constructor(options: IWorldOptions) {
super(options);

}
}
setWorldConstructor(CustomWorld);