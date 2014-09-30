'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('SummaryCtrl', function ($scope) {

  	console.log('SummaryCtrl');

    $scope.results = [];

  	$scope.results.push({
  		name: 'Bench Press',
  		sets: [{
  			setNumber: 1,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 2,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 3,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 4,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 5,
  			weight: 135,
  			reps: 5
  		}]
  	});

  	$scope.results.push({
  		name: 'Squat',
  		sets: [{
  			setNumber: 1,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 2,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 3,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 4,
  			weight: 135,
  			reps: 5
  		},{
  			setNumber: 5,
  			weight: 135,
  			reps: 5
  		}]
  	});
  });
