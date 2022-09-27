const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const supportCenter = require('../pageobjects/supportCenter.page');

const random = Math.random().toString(36).substring(4,14);

describe('support center', () => {
    it('Should search in support center with valid input', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await mainPage.supportCenter.click();

        await supportCenter.searchInput.addValue("faq");
        await browser.keys("Enter");
        await expect(supportCenter.result1).toHaveTextContaining("Google Verified Calls FAQ");
        await expect(supportCenter.result2).toHaveTextContaining("Robocall Mitigation Database FAQ");
    });

    it('Should receive error while search in support center with invalid input', async () => {
        await supportCenter.searchInput.setValue(random);
        await browser.keys("Enter");
        await expect(supportCenter.searchErrText).toHaveTextContaining("We couldn't find any articles for:");
    });
});