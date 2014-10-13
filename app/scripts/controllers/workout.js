'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:WorkoutctrlCtrl
 * @description
 * # WorkoutctrlCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('WorkoutCtrl', function ($scope, $location, workoutModel, resultsModel) {
  	// var excercises = [{
  	// 	name: 'Bench Press',
  	// 	sets: 5,
  	// 	reps: 5,
  	// 	weight: 125
  	// },{
  	// 	name: 'Squat',
  	// 	sets: 5,
  	// 	reps: 5,
  	// 	weight: 150
  	// }];

    var excercises = workoutModel.getActiveWorkout().excercises;

  	var excercise = 0;
    var overallSet = 0;

  	$scope.workingSet = 0;
  	$scope.name = excercises[excercise].name;
    $scope.sets = excercises[excercise].sets;
    $scope.duration = excercises[excercise].duration;

    var results = [];
    $scope.results = results;

    $scope.incrementWeight = function(){
    	$scope.sets[$scope.workingSet].weight = $scope.sets[$scope.workingSet].weight + 1;
    	if($scope.sets[$scope.workingSet].weight < 0){
    		$scope.sets[$scope.workingSet].weight = 0;
    	}
    };
    $scope.decrementWeight = function(){
    	$scope.sets[$scope.workingSet].weight = $scope.sets[$scope.workingSet].weight - 1;
    };

    $scope.incrementReps = function(){
    	$scope.sets[$scope.workingSet].reps = $scope.sets[$scope.workingSet].reps + 1;
    };
    $scope.decrementReps = function(){
    	$scope.sets[$scope.workingSet].reps = $scope.sets[$scope.workingSet].reps - 1;
    	if($scope.sets[$scope.workingSet].reps < 0){
    		$scope.sets[$scope.workingSet].reps = 0;
    	}
    };

    $scope.nextSet = function(){

      // update model state
      resultsModel.saveResult(excercise, $scope.sets[$scope.workingSet]);

      // increment to the next set
  		$scope.workingSet = $scope.workingSet + 1;
      overallSet = overallSet + 1;

      // check if we need to move on to the next excercise
      if($scope.workingSet >= $scope.sets.length){
        excercise = excercise + 1;
        advance();
      }
    };

    function advance() {
      if(excercise < excercises.length){

        $scope.workingSet = 0;
        $scope.name = excercises[excercise].name;
        $scope.sets = excercises[excercise].sets;
        $scope.duration = excercises[excercise].duration;

      } else {
        // totally done, lets see how I did...
        $location.path('/summary');
      }
    }
  });
