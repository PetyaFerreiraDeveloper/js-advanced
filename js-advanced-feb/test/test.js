// We use the commonJS syntaxis when we need to execute tests in node environment
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { doesNotMatch } = require('assert');
const options = { headless:false, slwoMo: 200 };
const url = 'http://127.0.0.1:5500/week3/11-architecture-test-lab/continueSpa/base'

describe('Custom test', function() {
    this.timeout(10000);

    it('succesful login', async function() {
        const browser = await chromium.launch(options);
        const page = await browser.newPage();

        await page.goto(url);
        await page.click('text="Login"');
        await page.fill('input[name=email]', 'peter@abv.bg');
        await page.fill('input[name=password]', '123456');
        await page.click('input[value=Login]');
        let buttonText = await page.textContent('#logoutBtn')
      
        expect(buttonText).to.be.equal('Logout');

        await browser.close();
    });
   

});