class storagePage {

    //Buttons
    get joinWlButton () {
        return $('main>div>div>div>div:nth-child(4)>div>a');
    }

    //Strings
    get firstName () {
        return $('#FirstName');
    }
    get lastName () {
        return $('#LastName');
    }
    get email () {
        return $('#Email');
    }
    get emailError () {
        return $('#ValidMsgEmail');
    }
}
module.exports = new storagePage();