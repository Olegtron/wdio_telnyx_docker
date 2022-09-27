class loginPage {

    //Buttons
    get loginButton () {
        return $('[aria-label="loginForm"] [role="button"][type="submit"]');
    }
    get singleSignOn() {
        return $('react-login>div>div>div>button:nth-child(2)');
    }

    //Links
    get forgotPass () {
        return $('[href="/#/login/password-reset"]');
    }
    get continue () {
        return $('//react-login/div[2]/div[2]/div[4]/form/button');
    }

    //Strings
    get emailString () {
        return $('form>div>div>label>div>div>[name="email"]');
    }
    get passString () {
        return $('form>div>div>label>div>div>[name="password"]');
    }
    get emailError () {
        return $('//react-login/div[2]/div[2]/div[3]/form/div[1]/div[1]/label/div/div[2]');
    }
    get companyEmail () {
        return $('form>label>div>div>input');
    }
    get error () {
        return $('react-login>div>div>div>div>div>span');
    }
}
module.exports = new loginPage();