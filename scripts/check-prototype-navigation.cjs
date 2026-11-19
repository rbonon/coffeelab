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
    await page.locator('#browse .browse-row').first().click(); await title('Hoffman V60 Better - Stardust');
    await page.getByRole('button',{name:'Abrir receita',exact:true}).click();
    assert.equal(await page.locator('#reader').isVisible(),true);
    await page.goBack(); await title('Hoffman V60 Better - Stardust');
    assert.equal(await page.locator('#reader').isVisible(),false);
    await page.goBack(); await title('Diário');
    await page.goForward(); await title('Hoffman V60 Better - Stardust');
    await page.reload(); await title('Hoffman V60 Better - Stardust');
    await page.goBack(); await title('Diário');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.click('#open-settings'); await page.waitForSelector('#configuration:visible');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.goForward(); await page.waitForSelector('#configuration:visible');
    await page.goBack(); await page.waitForSelector('#setup:visible');
    await page.click('[data-screen="recipes"]'); await title('Receitas');
    await page.locator('#browse .browse-row').first().click(); await page.waitForSelector('#reader:visible');
    await page.goBack(); await title('Receitas');
    await page.click('[data-screen="journal"]'); await title('Diário');
    await page.getByRole('button',{name:'Hoffman V60 Better - Vô Zico',exact:false}).click();
    await page.waitForFunction(()=>document.querySelector('.record-photo img')?.naturalWidth>0);
    assert.equal(await page.locator('.record-photo').count(),2);
    await page.locator('.record-photo').last().click(); await page.waitForSelector('#photo-viewer[open]');
    await page.goBack(); await page.waitForSelector('#photo-viewer:not([open])',{state:'attached'});
    await title('Hoffman V60 Better - Vô Zico');
    assert.equal(await page.locator('#exit, #close-settings, .back-link').count(),0);
    await page.click('[data-screen="library"]'); await title('Biblioteca');
    await page.getByRole('button',{name:'Stardust',exact:false}).first().click(); await title('Stardust');
    assert.equal(await page.locator('.record-photo').count(),10);
    const coffeeText=await page.locator('#browse').innerText();
    assert.ok(coffeeText.includes('04/11/2026') && coffeeText.includes('17/11/2026'));
    assert.ok(coffeeText.includes('250 g') && coffeeText.includes('1.100 m'));
    await page.locator('.record-photo').first().click(); await page.waitForSelector('#photo-viewer[open]');
    await page.waitForFunction(()=>document.querySelector('#photo-full')?.naturalWidth>0);
    await page.goBack(); await page.waitForSelector('#photo-viewer:not([open])',{state:'attached'}); await title('Stardust');
    await page.click('[data-screen="library"]'); await title('Biblioteca');
    await page.getByRole('button',{name:'Café do Vô Zico — Especial',exact:false}).click(); await title('Café do Vô Zico — Especial');
    assert.equal(await page.locator('.record-photo').count(),5);
    const voText=await page.locator('#browse').innerText();
    assert.ok(voText.includes('500 g') && voText.includes('15/09/2026') && voText.includes('15/09/2027'));
    assert.ok(voText.includes('82 pontos') && voText.includes('Não registrada'));
    assert.deepEqual(errors,[]);
    console.log('PASS: native Back/Forward, detail-to-reading return, Settings, reload restoration, and no redundant top back buttons');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
