const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const loginPage = require('../pageobjects/login.page');
const passResetPage = require('../pageobjects/passReset.page');

const randomEmail = Math.random().toString(36).substring(4,14)+"@gmail.com"

describe('forgot password', () => {
    it('Should be checked forgot password function', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();

        await mainPage.login.click();
        await loginPage.forgotPass.click();
        await passResetPage.emailField.addValue(randomEmail)
        await passResetPage.resetPassword.click();
        await expect(passResetPage.notification).toHaveTextContaining("We have accepted your password reset request");
    });
});