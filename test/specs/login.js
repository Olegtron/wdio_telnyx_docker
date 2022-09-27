const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const loginPage = require('../pageobjects/login.page');

const randomEmail = Math.random().toString(36).substring(4,14)+"@gmail.com"

describe('login', () => {
    it('Should login with valid credentials', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await mainPage.login.click();

        await loginPage.emailString.addValue("kusoushimatta@gmail.com");
        await loginPage.passString.addValue("000000000qQ@");
        await loginPage.loginButton.click();
    });

    it('Should not login with invalid credentials', async () => {
        await commonPage.webPage();
        await mainPage.login.click();

        await loginPage.emailString.addValue("abc");
        await loginPage.loginButton.click();

        await expect(loginPage.emailError).toHaveTextContaining("Please enter a valid email address.");
    });

    it('Should not login through “Single Sign-on” with not registered email', async () => {
        await loginPage.singleSignOn.click();
        await loginPage.companyEmail.addValue(randomEmail);
        await loginPage.continue.click();
        await expect(loginPage.error).toHaveTextContaining("The requested resource or URL could not be found.");
    });
});