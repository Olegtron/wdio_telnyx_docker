const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');

describe('sign-up redirection', () => {
    it('Should check sign-up redirection function', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        
        await mainPage.switchAndSaveBlock.scrollIntoView();
        await mainPage.createFreeTrial.click();
        await expect(browser).toHaveUrl('https://telnyx.com/sign-up')
    });
});