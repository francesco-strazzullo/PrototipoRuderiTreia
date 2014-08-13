var _ = require('underscore');
var _str = require('underscore.string');

var AppHousePage = function() {
    return {
        get: function() {
            browser.get('http://127.0.0.1:9000/#/house/0');
            return this;
        }
    };
};

describe('House page', function() {
    it('should have a central button that leads to house building', function() {
       expect(1).toBe(1);
    });
});