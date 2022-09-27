class supportCenter {

    //Strings
    get searchInput () {
        return $('body>header>div>div>form>input');
    }
    get result1 () {
        return $('div.container>div>section>div:nth-child(2)>a>div>h2');
    }
    get result2 () {
        return $('div.container>div>section>div:nth-child(3)>a>div>h2>span');
    }
    get searchErrText () {
        return $('div.container>div>section>div>div>span');
    }
}
module.exports = new supportCenter();