'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:excerciseSummary
 * @description
 * # excerciseSummary
 */
angular.module('workoutbookApp')
  .directive('excerciseSummary', function () {
    return {
      templateUrl: '/views/templates/excercise_summary_tpl.html',
      restrict: 'E',
      scope: {
      	excercise: '=excercise'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
