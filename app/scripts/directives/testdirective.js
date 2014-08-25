'use strict';

/**
 * @ngdoc directive
 * @name codementorApp.directive:testDirective
 * @description
 * # testDirective
 */

angular.module('codementorApp')
  .directive('testdirective', function () {
    return {
      restrict: 'AE',
      template: '<h1 class="testDirective">{{test}}</h1>',
      link: function (scope, element) {
      	scope.test = 'testDirective'
      }
    };
  });
