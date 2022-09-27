const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const signUpPage = require('../pageobjects/signUp.page');

const random = Array(12).fill("QWERTYUIOPqwertyuiop12345@#!@#").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
const randomPass = Array(12).fill("QWERTYqwerty12345@#!@#").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
const randomEmail = random+"@gmail.com"

describe('registration', () => {
    it('Should complete registration with valid credentials', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await mainPage.signUp.click();

        await signUpPage.emailString.addValue(randomEmail)
        await signUpPage.nameString.addValue(random)
        await signUpPage.passwordString.addValue(randomPass)
        await signUpPage.checkbox.click();
        await signUpPage.createAccount.click();
    });

    it('Should not complete registration with invalid credentials', async () => {
        await commonPage.webPage();
        await mainPage.signUp.click();

        await signUpPage.emailString.addValue("abc")
        await signUpPage.nameString.addValue("abc")
        await signUpPage.passwordString.addValue("abc")
        await signUpPage.createAccount.click();

        await expect(signUpPage.emailError).toHaveTextContaining("Please enter a valid email address.");
        await expect(signUpPage.passError).toHaveTextContaining("Be at least 12 characters long");
    });
});