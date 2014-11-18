'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:topBar
 * @description
 * # topBar
 */
angular.module('workoutbookApp')
  .directive('topBar', function () {
    return {
      templateUrl: '/views/templates/top-bar.html',
      restrict: 'E',
    };
  });
