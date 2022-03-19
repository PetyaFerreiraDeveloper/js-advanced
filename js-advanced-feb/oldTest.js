const { chromium } = require('playwright-chromium');

// create an IIFE immediately invoked function expression
(async function() {
    // for debug we set headless to false and slowMo
    const browser = await chromium.launch({headless: false, slowMo:100});
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/week3/11-architecture-test-lab/continueSpa/base');
    await page.screenshot({path: 'screenshot.png'});

    // await browser.close();


})()