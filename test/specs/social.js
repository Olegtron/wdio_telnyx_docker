const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');

describe('social', () => {
    it('Should check that social links is clickable and have correct url', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();

        await mainPage.linkedinLink.isClickable();
        await mainPage.twitterLink.isClickable();
        await mainPage.facebookLink.isClickable();
        await expect(mainPage.linkedinLink).toHaveHref('https://www.linkedin.com/company/telnyx/')
        await expect(mainPage.twitterLink).toHaveHref('https://twitter.com/telnyx')
        await expect(mainPage.facebookLink).toHaveHref('https://www.facebook.com/Telnyx/')
    });
});