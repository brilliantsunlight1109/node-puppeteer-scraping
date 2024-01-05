const scraperObject = {
	url: 'https://salonboard.com/login/',
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);

        await page.setViewport( { 'width' : 1920, 'height' : 1080 } );
        //type ID
        await page.type('input.w240', 'CD66356');
        //type Pass
        await page.type('input.loginPwInput', 'bridge123!!');
        //type login
        await page.click('div.columnBlock.mt46.ml15 > a');

        await page.waitForSelector('.section.cf #globalNavi');

        let showButtonExist = false;
        try{
            const showButton = await page.$eval('a.cmsLink > img', a => a.textContent);
            showButtonExist = true;
        } catch{
            showButtonExist = false;
        }
        if(showButtonExist){
            await page.click('a.cmsLink > img');
        }
	}
}

module.exports = scraperObject;