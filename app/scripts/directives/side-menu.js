'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:sideMenu
 * @description
 * # sideMenu
 */
angular.module('workoutbookApp')
  .directive('sideMenu', function () {
    return {
      templateUrl: '/views/templates/side-menu.html',
      restrict: 'E'
    };
  });
