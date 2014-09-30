'use strict';

describe('Controller: SlidemenuCtrl', function () {

  // load the controller's module
  beforeEach(module('workoutbookApp'));

  var SlidemenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidemenuCtrl = $controller('SlidemenuCtrl', {
      $scope: scope
    });
  }));

});
