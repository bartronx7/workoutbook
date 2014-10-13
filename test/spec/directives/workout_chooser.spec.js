'use strict';

describe('Directive: workoutChooser', function () {

  // load the directive's module
  beforeEach(module('workoutbookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should have three buttons', inject(function ($compile) {
    element = angular.element('<workout-chooser></workout-chooser>');
    element = $compile(element)(scope);

    expect(element.find('btn').length).toEqual(3);
  }));
});
