var _ = require('underscore');
var _str = require('underscore.string');

var AppHomePage = function() {
    return {
        get: function() {
            browser.get('http://127.0.0.1:9000/');
            return this;
        },
        getCentralButton: function() {
            return element(by.id('CentralButton'));
        }
    };
};

describe('Home page', function() {
    it('should have a central button that leads to house building', function() {
        var homePage = AppHomePage();
        homePage.get();
        expect(homePage.getCentralButton()).toBeDefined();
    });

    it('the central button should lead to house building', function() {
        var homePage = AppHomePage();
        homePage.get().getCentralButton().click().then(function(){
            protractor.getInstance().getCurrentUrl().then(function(url){
                //taking the path
                url = _str.strRight(url,":9000");
                url = _str.strRight(url,"/");
                url = _str.strLeftBack(url,"/");
                expect(url).toBe("#/house");
            });
        });
    });
});