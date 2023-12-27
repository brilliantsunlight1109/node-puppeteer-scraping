const scraperObject = {
	url: 'https://salonboard.com/login/',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
        //type ID
        await page.type('input.w240', 'CD66356');
        //type Pass
        await page.type('input.loginPwInput', 'bridge123!!');
        //type login
        await page.click('div.columnBlock.mt46.ml15 a');
	}
}

module.exports = scraperObject;

