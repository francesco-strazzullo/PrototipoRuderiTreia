'use strict';

describe('Controllers', function () {

  // load the controller's module
  beforeEach(module('ruderiTreia001App'));

  var root,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    root = $controller('root', {
      $scope: scope
    });
  }));

  it('the currentPath must be sync with the locationPath', function () {
    expect(1).toBe(1);
  });
});
