'use strict';

describe('Directive: excerciseSummary', function () {

  // load the directive's module
  beforeEach(module('workoutbookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<excercise-summary></excercise-summary>');
    element = $compile(element)(scope);

  }));
});
