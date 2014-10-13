'use strict';

/**
 * @ngdoc service
 * @name workoutbookApp.workoutModel
 * @description
 * # workoutModel
 * Service in the workoutbookApp.
 */
angular.module('workoutbookApp')
  .service('workoutModel', function workoutModel() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var workout;
    var results;

    this.setActiveWorkout = function(w){
    	workout = w;
    };
    this.getActiveWorkout = function(){
    	return workout;
    };
  });
