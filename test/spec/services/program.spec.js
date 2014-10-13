'use strict';

describe('Service: programModel', function () {

  // load the service's module
  beforeEach(module('workoutbookApp'));

  // instantiate service
  var programModel;
  beforeEach(inject(function (_programModel_) {
    programModel = _programModel_;
  }));

  it('should do something', function () {
    expect(!!programModel).toBe(true);
  });

});
