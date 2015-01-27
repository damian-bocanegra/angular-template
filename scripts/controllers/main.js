'use strict';

/**
 * @ngdoc function
 * @name dmnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmnApp
 */
angular.module('dmnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
