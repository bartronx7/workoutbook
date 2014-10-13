'use strict';

/**
 * @ngdoc service
 * @name workoutbookApp.resultsModel
 * @description
 * # resultsModel
 * Service in the workoutbookApp.
 */
 angular.module('workoutbookApp')
 .service('resultsModel', function resultsModel() {
 	var results = {excercises: []};
 	this.saveResult = function(excercise, result){
    	//TODO: backend needed
    };
    this.getResults = function(){
    	//TODO: backend needed
    	return [{
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
    	},{
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
    	},{
    			name: 'Jump Rope',
    			sets: [{
    				setNumber: 1,
    				duration: '10m'
    			}]
    		}];
    };
  });
