'use strict';

describe('Directive: sideMenu', function () {

  // load the directive's module
  beforeEach(module('workoutbookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<side-menu></side-menu>');
    element = $compile(element)(scope);

  }));
});
