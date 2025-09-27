import { Page, Locator, expect } from '@playwright/test';

export class Consent {
constructor (private readonly page:Page){ }

public get  cookieButton(): Locator {
    return this.page.locator('[class="fc-button fc-cta-consent fc-primary-button"]');
}

async acceptCookies() {
   
   try {
        await expect (this.cookieButton).toBeVisible({timeout:5000});
         await this.cookieButton.click();
        
   }
    catch  {}
   
}

}

