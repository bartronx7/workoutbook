'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:excerciseProgress
 * @description
 * # excerciseProgress
 */
angular.module('workoutbookApp')
  .directive('excerciseProgress', function () {
    return {
      templateUrl: '/views/templates/excercise_progress_tpl.html',
      restrict: 'E',
      scope: {
      	total: 		'=totalCount',
      	current: 	'=currentCount'
      },
      link: function postLink($scope, element, attrs) {
        // $scope.total = $scope.total || 0;
        // $scope.current = $scope.current || 0;
        console.log($scope);
      }
    };
  });
