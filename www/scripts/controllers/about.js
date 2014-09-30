'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
