const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const contactUsPage = require('../pageobjects/ContactUs.page');

const random = Array(12).fill("QWERTYUIOPqwertyuiop").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
const randomPhone = Array(10).fill("1234567890").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

describe('talk to an expert', () => {
    it('Should create ticket via talk to an expert using valid credentials', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await mainPage.talkToExpert.click();

        await contactUsPage.reasonValue.click();
        await contactUsPage.firstName.addValue(random);
        await contactUsPage.lastName.addValue(random);
        await contactUsPage.email.addValue(random+"@gmail.com");
        await contactUsPage.country.click();
        await contactUsPage.phoneNumber.addValue(randomPhone);
        await contactUsPage.website.addValue("http://"+random+"@gmail.com");
        await commonPage.applyNowButton.click();

        await expect(contactUsPage.confirmText).toHaveText("Thanks for Reaching Out!");
    });

    it('Should not create ticket via talk to an expert using invalid credentials', async () => {
        await commonPage.webPage();
        await mainPage.talkToExpert.click();

        await contactUsPage.reasonValue.click();
        await contactUsPage.firstName.addValue(random);
        await contactUsPage.lastName.addValue(random);
        await contactUsPage.email.addValue(random);
        await commonPage.applyNowButton.click();
        await expect(contactUsPage.invalidEmailText).toHaveTextContaining("Must be valid email.");

        await contactUsPage.website.addValue(random);
        await expect(contactUsPage.invalidWebsiteText).toHaveTextContaining("Must be a url.");
    });
});