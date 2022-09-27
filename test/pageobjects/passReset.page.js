class passResetPage {
    //Buttons
    get resetPassword () {
        return $('react-login>div>div>form>div>div>button');
    }

    //Strings
    get emailField () {
        return $('[placeholder="Enter email"]');
    }
    get notification () {
        return $('react-login>div>div>div>div>div>span>div>div')
    }

    //Links
    get forgotPass () {
        return $('[href="/#/login/password-reset"]');
    }
}
module.exports = new passResetPage();