class signUpPage {

    //Buttons
    get createAccount() {
        return $('form>div>div>button');
    }

    //Strings
    get emailString () {
        return $('[id="email"]');
    }
    get nameString () {
        return $('[id="full_name"]');
    }
    get passwordString () {
        return $('[id="password"]');
    }
    get emailError () {
        return $('[id="email_error"]');
    }
    get passError () {
        return $('#password_requirements');
    }

    //Checkbox
    get checkbox () {
        return $(':nth-child(1)>div>div>svg>rect');
    }
}
module.exports = new signUpPage();