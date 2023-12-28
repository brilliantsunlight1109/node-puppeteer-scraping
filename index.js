const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-setuid-sandbox"],
    'ignoreHTTPSErrors': true
});
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
  await page.goto('https://salonboard.com/login/');

  await page.type('input.w240', 'CD66356');

  await page.type('input.loginPwInput', 'bridge123!!');

  await page.click('div.columnBlock.mt46.ml15 > a');

  console.log("button click");

const handleUrlChange = async (newUrl) => {
    if (newUrl === 'https://salonboard.com/CLP/bt/top/') {
      console.log('URL search:');
      await page.goto('https://salonboard.com/CNB/draft/styleEdit/');
    }
  };
  
  // Attach the event listener to 'framenavigated' event
  page.on('framenavigated', async (frame) => {
    const newUrl = await frame.url();
    console.log("newUrl: ", newUrl);
    await handleUrlChange(newUrl);
  });

})();