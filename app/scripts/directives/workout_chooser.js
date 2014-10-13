'use strict';

/**
 * @ngdoc directive
 * @name workoutbookApp.directive:workoutChooser
 * @description
 * # workoutChooser
 */
angular.module('workoutbookApp')
  .directive('workoutChooser', function (_) {
    return {
      templateUrl: '/views/templates/workout_chooser_tpl.html',
      restrict: 'E',
      scope: {
      	'choose': '&workoutChoice',
      	'active': '=workoutActive'
      },
      link: function postLink(scope, element, attrs) {

      	var unselected = 'btn-default',
      		selected = 'btn-primary';

      	scope.buttons = {
	  		'upcoming': 	{type:unselected},
	  		'today': 		{type:unselected},
	  		'previous': 	{type:unselected}
	  	};

	  	scope.buttons[scope.active].type = selected;

	  	scope.setActive = function(name){
	  		_.each(scope.buttons, function(btn){
	  			btn.type = unselected;
	  		});
	  		scope.buttons[name].type = selected;

	  		scope.choose({name:name});
	  	};
      }
    };
  });
