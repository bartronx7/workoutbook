'use strict';

/**
 * @ngdoc service
 * @name workoutbookApp.programModel
 * @description
 * # programModel
 * program model will get the program from the user's gym and return the workout
 * that corresponds with a date index from that program
 */
angular.module('workoutbookApp')
  .service('program', function program($q) {

    this.getWorkout = function(user, gym, date){

    	// fake it for now...
    	var d = $q.defer();

    	d.resolve({
        excercises: [{
          name: 'Bench Press',
          sets: [{
            reps: 5,
            weight: 135
          },{
            reps: 5,
            weight: 135
          },{
            reps: 5,
            weight: 135
          },{
            reps: 5,
            weight: 135
          },{
            reps: 5,
            weight: 135
          }]
        },{
          name: 'Squat',
          sets: [{
            reps: 5,
            weight: 150
          },{
            reps: 5,
            weight: 150
          },{
            reps: 5,
            weight: 150
          },{
            reps: 5,
            weight: 150
          },{
            reps: 5,
            weight: 150
          }]
        },{
          name: 'Jump Rope',
          sets: [{
            duration: '10m'
          }]
        }]
    	});

    	return d.promise;
    };
  });
