'use strict';

/**
 * @ngdoc function
 * @name dmnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dmnApp
 */
angular.module('dmnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
