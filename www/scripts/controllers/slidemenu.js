'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:SlidemenuCtrl
 * @description
 * # SlidemenuCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('SlidemenuCtrl', function ($scope, $location, $log) {

  	$scope.slideMenuVisible = false;

  	$scope.showMenu = function(){
  		$scope.slideMenuVisible = !$scope.slideMenuVisible;
  	};

  	$scope.goTo = function(route){
  		$scope.slideMenuVisible = false;
  		$location.path(route);
  		$log.debug('routing to',route);
  	};

  });
