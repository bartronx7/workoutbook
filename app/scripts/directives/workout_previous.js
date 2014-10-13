'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:workoutPrevious
 * @description
 * # workoutPrevious
 */
angular.module('workoutbookApp')
  .directive('workoutPrevious', function () {
    return {
      template: '<div><h1>Previous Workouts</h1></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
