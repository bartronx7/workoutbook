'use strict';

describe('Service: resultsModel', function () {

  // load the service's module
  beforeEach(module('workoutbookApp'));

  // instantiate service
  var resultsModel;
  beforeEach(inject(function (_resultsModel_) {
    resultsModel = _resultsModel_;
  }));

  it('should do something', function () {
    expect(!!resultsModel).toBe(true);
  });

});
