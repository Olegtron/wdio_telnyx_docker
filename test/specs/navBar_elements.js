const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');

describe('Navigation Bar', () => {
    it('Should check that all nav bar elements displayed', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();

        await mainPage.Products.isDisplayed()
        await mainPage.Solutions.isDisplayed()
        await mainPage.Network.isDisplayed()
        await mainPage.Resources.isDisplayed()
        await mainPage.Company.isDisplayed()
        await mainPage.Pricing.isDisplayed()
    });
});