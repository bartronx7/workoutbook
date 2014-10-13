'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:workoutUpcoming
 * @description
 * # workoutUpcoming
 */
angular.module('workoutbookApp')
  .directive('workoutUpcoming', function () {
    return {
      template: '<div><h1>Upcoming workouts</h1></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
