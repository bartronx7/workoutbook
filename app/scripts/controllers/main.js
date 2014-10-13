'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('MainCtrl', function ($scope,$location) {

  	$scope.activeWorkout = 'today';

  	$scope.chooseWorkout = function(name){
  		$scope.activeWorkout = name;
  	};
  });
