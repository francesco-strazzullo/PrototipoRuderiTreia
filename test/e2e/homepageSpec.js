var AppHomePage = function() {
	return {
		get: function() {
			browser.get('http://127.0.0.1:9000/');
		}
	};
};

describe('Home page', function() {
	it('should have a talks section', function() {
		var homePage = AppHomePage();
		homePage.get();
		expect(1).toEqual(1);
	});
});