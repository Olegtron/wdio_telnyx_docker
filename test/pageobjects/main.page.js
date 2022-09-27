class mainPage {

    //Buttons
    get tryForFree () {
        return $('[type="submit"]');
    }
    get requestDemo () {
        return $('div>div>div>div>div>div>div>p>a');
    }
    get talkToExpert () {
        return $('li:nth-child(1)>div>a');
    }
    get supportCenter () {
        return $('header>div>div>div>a:nth-child(3)');
    }
    get sms () {
        return $('div>div>div>div>div>div>div>button:nth-child(2)');
    }
    get voice () {
        return $('div>div>div>div>div>div>div>button:nth-child(1)');
    }
    get login () {
        return $('header>div>div>div>a:nth-child(4)');
    }
    get createFreeTrial () {
        return $('main>div>div>div>div>div>div>div>div>div>div:nth-child(2)>div>div:nth-child(1)>a');
    }
    get signUp () {
        return $('li:nth-child(2)>div>a');
    }

    //Links
    get linkedinLink () {
        return $('footer>div>div>div:nth-child(6)>div>ul>li:nth-child(1)>a');
    }
    get twitterLink () {
        return $('footer>div>div>div:nth-child(6)>div>ul>li:nth-child(2)>a');
    }
    get facebookLink () {
        return $('footer>div>div>div:nth-child(6)>div>ul>li:nth-child(3)>a');
    }

    //Navigation Bar elements
    get Products () {
        return $('li:nth-child(1)>span>span');
    }
    get Solutions () {
        return $('li:nth-child(3)>span>span');
    }
    get Network () {
        return $(':nth-child(5)>span>a');
    }
    get Resources () {
        return $('li:nth-child(6)>span>span');
    }
    get Company () {
        return $('li:nth-child(8)>span>span');
    }
    get Pricing () {
        return $('li:nth-child(10)>span>span');
    }

    //Page elements
    get switchAndSaveBlock () {
        return $('div>h2>a>span');
    }
    get unboundCallsSlider () {
        return $('main>div>div>div>div>div>div>div>div>div>div:nth-child(4)>div:nth-child(3)');
    }
    get receiveInboundCallsSlider () {
        return $('main>div>div>div>div>div>div>div>div>div>div:nth-child(5)>div:nth-child(3)');
    }
    get telnyxCompareCostValue () {
        return $('div>span>span');
    }
    get twilioCompareCostValue () {
        return $('div>div>div>div>div>div>div>div:nth-child(2)>span');
    }
    get firstSlider () {
        return $(':nth-child(4)>div.telnyx-slider>div>div.ant-slider-handle');
    }
    get secondSlider () {
        return $(':nth-child(5)>div.telnyx-slider>div>div.ant-slider-handle');
    }
    get tryForFreeEmail () {
        return $('[type="email"]');
    }
}
module.exports = new mainPage();