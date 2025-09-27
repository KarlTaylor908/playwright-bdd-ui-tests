import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, type Browser } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;
setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ 
     channel: 'chrome',
     args: ['--start-maximized'],
    headless: true }
  );
    
  
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext({
  baseURL: 'https://automationexercise.com/',
    serviceWorkers: 'block',       
    locale: 'en-GB',
    timezoneId: 'Europe/London'
});
this.page = await this.context.newPage();
});

    AfterAll(async () => {
    await browser.close();
    });

After(async function ({ result }: any) {
  if (String(result?.status).toUpperCase() !== 'PASSED') {
    const shot = await this.page.screenshot({ fullPage: true });
    await this.attach(shot, 'image/png');
  }
  await this.context.close();
});