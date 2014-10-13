'use strict';

describe('Service: workoutModel', function () {

  // load the service's module
  beforeEach(module('workoutbookApp'));

  // instantiate service
  var workoutModel;
  beforeEach(inject(function (_workoutModel_) {
    workoutModel = _workoutModel_;
  }));

  it('should do something', function () {
    expect(!!workoutModel).toBe(true);
  });

});
