'use strict';

/**
 * @ngdoc function
 * @name codementorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codementorApp
 */
angular.module('codementorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
