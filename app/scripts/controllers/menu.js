(function() {
  'use strict';
  angular.module('myPersonalWebsiteApp')
    .controller('MenuCtrl', function($scope) {
      $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left',
        delay : 500
      };
    });
})();

