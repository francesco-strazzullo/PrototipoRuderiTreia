'use strict';

describe('Services', function () {

  // load the controller's module
  beforeEach(module('ruderiTreia001App'));


  it('it should have an house repository service', inject(['housesRepository',function(housesRepository) {
    expect(3).toBe(3);
  }]));
});
