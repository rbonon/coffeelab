// Requires Playwright. Set COFFEELAB_PLAYWRIGHT_PATH to an installed module path if needed.
// Run against a local server: COFFEELAB_PREVIEW_URL=http://127.0.0.1:8765/docs/prototypes/recipe-reading.html node scripts/check-prototype-navigation.cjs
const assert = require('node:assert/strict');
const {chromium} = require(process.env.COFFEELAB_PLAYWRIGHT_PATH || 'playwright');
(async () => {
  const browser = await chromium.launch(process.env.COFFEELAB_CHROME ? {executablePath:process.env.COFFEELAB_CHROME,headless:true} : {headless:true});
  try {
    const page = await browser.newPage({viewport:{width:412,height:800}});
    const errors=[];page.on('pageerror', error=>errors.push(error.message));
    await page.goto(process.env.COFFEELAB_PREVIEW_URL || 'http://127.0.0.1:8765/docs/prototypes/recipe-reading.html');
    const title=async expected=>{await page.waitForFunction(value=>document.querySelector('#browse-title')?.textContent===value,expected);};
    await page.click('[data-screen="journal"]'); await title('Diário');
    await page.locator('#browse .browse-row').first().click(); await title('B01 · Stardust');
    await page.getByRole('button',{name:'Abrir receita',exact:true}).click();
    assert.equal(await page.locator('#reader').isVisible(),true);
    await page.goBack(); await title('B01 · Stardust');
    assert.equal(await page.locator('#reader').isVisible(),false);
    await page.goBack(); await title('Diário');
    await page.goForward(); await title('B01 · Stardust');
    await page.reload(); await title('B01 · Stardust');
    await page.goBack(); await title('Diário');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.click('#open-settings'); await page.waitForSelector('#configuration:visible');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.goForward(); await page.waitForSelector('#configuration:visible');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.click('[data-screen="recipes"]'); await title('Receitas');
    await page.locator('#browse .browse-row').first().click(); await page.waitForSelector('#reader:visible');
    await page.goBack(); await title('Receitas');
    assert.equal(await page.locator('#exit, #close-settings, .back-link').count(),0);
    assert.deepEqual(errors,[]);
    console.log('PASS: native Back/Forward, detail-to-reading return, Settings, reload restoration, and no redundant top back buttons');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
