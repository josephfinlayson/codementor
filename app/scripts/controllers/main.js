'use strict';

/**
 * @ngdoc function
 * @name codementorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codementorApp
 */
angular.module('codementorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
