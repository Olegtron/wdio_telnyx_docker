class contactUsPage {

    //Button
    get requestDemo () {
        return $('div>div>div>div>div>div>div>p>a');
    }

    //Strings
    get reasonValue () {
        return $('#Reason_for_Contact__c > option:nth-child(4)');
    }
    get firstName () {
        return $('#FirstName');
    }
    get lastName () {
        return $('#LastName');
    }
    get email () {
        return $('#Email');
    }
    get country () {
        return $('#Phone_Number_Extension__c > option:nth-child(2)');
    }
    get phoneNumber () {
        return $('#Phone_Number_Base__c');
    }
    get website() {
        return $('#Website');
    }
    get confirmText() {
        return $('div>main>div>h1');
    }
    get invalidEmailText() {
        return $('#ValidMsgEmail');
    }
    get invalidWebsiteText() {
        return $('#ValidMsgWebsite');
    }
}
module.exports = new contactUsPage();