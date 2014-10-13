'use strict';

describe('Controller: WorkoutCtrl', function () {

  // load the controller's module
  beforeEach(module('workoutbookApp'));

  var WorkoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkoutCtrl = $controller('WorkoutCtrl', {
      $scope: scope
    });
  }));

  it('should',function(){
    expect(true).toEqual(true);
  });

});
