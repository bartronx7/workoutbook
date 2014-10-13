'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:workoutToday
 * @description
 * # workoutToday
 */
 angular.module('workoutbookApp')
 .directive('workoutToday', function ($location, program, session, workoutModel) {
 	return {
 		templateUrl: '/views/templates/workout_today_tpl.html',
 		restrict: 'E',
 		scope: true,
 		link: function postLink($scope, element, attrs) {

 			var date = new Date();
 			var today = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate();

 			$scope.workout = null;
 			$scope.busy = true;

 			// program model will get the program from the user's gym and return the workout
 			// that corresponds with today's date from that program
 			program.getWorkout(session.getUsername, session.getGym, today).then(function(w){
 				$scope.workout = w;
 				$scope.busy = false;
 			}, function(e){
 				$scope.error = e;
 				$scope.busy = false;
 			});

 			$scope.beginWorkout = function(){
 				workoutModel.setActiveWorkout($scope.workout);
 				$location.path('/workout');
 			};
 		}
 	};
});
