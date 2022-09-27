const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');
const contactUsPage = require('../pageobjects/contactUs.page');

const random = Array(12).fill("QWERTYUIOPqwertyuiop").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
const randomPhone = Array(10).fill("1234567890").map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

describe('Request demo', () => {
    it('Should request demo via Request demo button', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();
        await mainPage.requestDemo.click();

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
});