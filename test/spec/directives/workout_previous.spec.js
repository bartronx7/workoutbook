'use strict';

describe('Directive: workoutPrevious', function () {

  // load the directive's module
  beforeEach(module('workoutbookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<workout-previous></workout-previous>');
    element = $compile(element)(scope);
  }));
});
