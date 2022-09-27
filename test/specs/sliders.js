const commonPage = require('../pageobjects/common.page');
const mainPage = require('../pageobjects/main.page');

describe('sliders and price check', () => {
    it('Should check basic prices for voice tab', async () => {
        await commonPage.webPage();
        await commonPage.cookieClose();

        await mainPage.switchAndSaveBlock.scrollIntoView();
        await expect(mainPage.unboundCallsSlider).toHaveTextContaining("240,000 minutes per month using 480 local numbers.");
        await expect(mainPage.receiveInboundCallsSlider).toHaveTextContaining("110,000 minutes per month using 220 local numbers.");
        await expect(mainPage.telnyxCompareCostValue).toHaveTextContaining("$2,578");
        await expect(mainPage.twilioCompareCostValue).toHaveTextContaining("$4,502");
    });

    it('Should check basic prices for sms tab', async () => {
        await mainPage.sms.click();
        await expect(mainPage.unboundCallsSlider).toHaveTextContaining("285,000 SMS per month.");
        await expect(mainPage.receiveInboundCallsSlider).toHaveTextContaining("350,000 SMS per month.");
        await expect(mainPage.telnyxCompareCostValue).toHaveTextContaining("$2,540");
        await expect(mainPage.twilioCompareCostValue).toHaveTextContaining("$4,763");
    });

    it('Should move sliders and check that prices in sms tab changed', async () => {
        await mainPage.firstSlider.click();
        await mainPage.secondSlider.click();

        await expect(mainPage.unboundCallsSlider).toHaveTextContaining("288,000 SMS per month.");
        await expect(mainPage.receiveInboundCallsSlider).toHaveTextContaining("353,000 SMS per month.");
        await expect(mainPage.telnyxCompareCostValue).toHaveTextContaining("$2,564");
        await expect(mainPage.twilioCompareCostValue).toHaveTextContaining("$4,808");
    });

    it('Should move sliders and check that prices in voice tab changed', async () => {
        await mainPage.voice.click();
        await mainPage.firstSlider.click();
        await mainPage.secondSlider.click();

        await expect(mainPage.unboundCallsSlider).toHaveTextContaining("243,000 minutes per month using 486 local numbers.");
        await expect(mainPage.receiveInboundCallsSlider).toHaveTextContaining("113,000 minutes per month using 226 local numbers.");
        await expect(mainPage.telnyxCompareCostValue).toHaveTextContaining("$2,617");
        await expect(mainPage.twilioCompareCostValue).toHaveTextContaining("$4,570");
    });
});