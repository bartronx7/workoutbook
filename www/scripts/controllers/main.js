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
  	$scope.beginWorkout = function(){
  		$location.path('/workout');
  	};
  });
