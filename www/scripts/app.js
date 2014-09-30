'use strict';

/**
 * @ngdoc overview
 * @name workoutbookApp
 * @description
 * # workoutbookApp
 *
 * Main module of the application.
 */
angular
  .module('workoutbookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/workout', {
        templateUrl: 'views/workout.html',
        controller: 'WorkoutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/goals', {
        templateUrl: 'views/goals.html',
        controller: 'GoalsCtrl'
      })
      .when('/progress', {
        templateUrl: 'views/progress.html',
        controller: 'ProgressCtrl'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
