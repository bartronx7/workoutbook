'use strict';

/**
 * @ngdoc service
 * @name workoutbookApp.session
 * @description
 * # session
 * Service in the workoutbookApp.
 */
angular.module('workoutbookApp')
  .service('session', function session() {

    //TODO: set these at login

    var username = 'bart';
    var gym = 'beyondfit';

    this.getUsername = function(){
    	return username;
    };
    this.setUsername = function(u){
    	username = u;
    };

    this.getGym = function(){
    	return gym;
    };
    this.setGym = function(g){
    	gym = g;
    };
  });
