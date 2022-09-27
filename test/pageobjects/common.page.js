class commonPage {

    //Buttons
    get cookieCloseButton () {
        return $('[aria-label="close and deny"]');
    }
    get applyNowButton () {
        return $('[type="submit"]');
    }
    get joinButton () {
        return $('header>div>div>span>div>span>a');
    }

    //Actions
    async webPage() {
        await browser.url(process.env.ENV);
        await browser.setWindowSize(1920, 1080);
    }
    async cookieClose() {
        if (await this.cookieCloseButton.isDisplayed()) {
            await this.cookieCloseButton.click();}}
}
module.exports = new commonPage();