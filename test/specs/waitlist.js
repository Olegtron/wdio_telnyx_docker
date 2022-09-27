const commonPage = require('../pageobjects/common.page');
const storagePage = require('../pageobjects/storage.page');
const confirmationPage = require('../pageobjects/confirmation.page');

const random = Math.random().toString(36).substring(4,14)
const randomEmail = random+"@gmail.com"

describe('join the waitlist', () => {
    it('Should join the waitlist with valid credentials', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await commonPage.joinButton.click();
        await storagePage.joinWlButton.click();

        await storagePage.firstName.addValue(random);
        await storagePage.lastName.addValue(random);
        await storagePage.email.addValue(randomEmail);
        await commonPage.applyNowButton.click();

        await expect(browser).toHaveUrl('https://telnyx.com/products/storage-waitlist')
        await expect(confirmationPage.confirmText).toHaveText("You're on the waitlist!");
    });

    it('Should not join the waitlist with invalid credentials', async () => {
        await commonPage.webPage();
        await commonPage.joinButton.click();
        await storagePage.joinWlButton.click();

        await storagePage.firstName.addValue(random);
        await storagePage.lastName.addValue(random);
        await storagePage.email.addValue(random);
        await commonPage.applyNowButton.click();

        await expect(storagePage.emailError).toHaveTextContaining("Must be valid email.");
    });
});
