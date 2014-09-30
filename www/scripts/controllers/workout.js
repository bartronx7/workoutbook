'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:WorkoutctrlCtrl
 * @description
 * # WorkoutctrlCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('WorkoutCtrl', function ($scope, $location) {
  	var workouts = [{
  		name: 'Bench Press',
  		sets: 5,
  		reps: 5,
  		weight: 125
  	},{
  		name: 'Squat',
  		sets: 5,
  		reps: 5,
  		weight: 150
  	}];

  	var workout = 0;

  	$scope.workingSet = 0;
  	$scope.overallSet = 0;
  	$scope.name = workouts[workout].name;
  	$scope.totalSets = workouts[workout].sets;
    $scope.weight = workouts[workout].weight;
    $scope.reps = workouts[workout].reps;

    var results = [];

    $scope.incrementWeight = function(){
    	$scope.weight = $scope.weight + 1;
    	if($scope.weight < 0){
    		$scope.weight = 0;
    	}
    };
    $scope.decrementWeight = function(){
    	$scope.weight = $scope.weight - 1;
    };

    $scope.incrementReps = function(){
    	$scope.reps = $scope.reps + 1;
    };
    $scope.decrementReps = function(){
    	$scope.reps = $scope.reps - 1;
    	if($scope.reps < 0){
    		$scope.reps = 0;
    	}
    };

    $scope.nextSet = function(){
    	if($scope.workingSet < $scope.totalSets){
    		recordProgress();
    		$scope.workingSet = $scope.workingSet + 1;
    	} else {
    		workout = workout + 1;
    		if(workout < workouts.length){
    			$scope.workingSet = 0;
    			$scope.name = workouts[workout].name;
			  	$scope.totalSets = workouts[workout].sets;
			    $scope.weight = workouts[workout].weight;
			    $scope.reps = workouts[workout].reps;
    		} else {
    			$location.path('/summary');
    		}
    	}
    };

    var recordProgress = function(){
    	results.push({

    	});
    };

  });
