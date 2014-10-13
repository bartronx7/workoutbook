'use strict';

/**
 * @ngdoc function
 * @name workoutbookApp.controller:SummaryCtrl
 * @description
 * # SummaryCtrl
 * Controller of the workoutbookApp
 */
angular.module('workoutbookApp')
  .controller('SummaryCtrl', function ($scope, resultsModel) {

  	console.log('SummaryCtrl');

    $scope.results = resultsModel.getResults();


  });
