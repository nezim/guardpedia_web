'use strict';

angular.
module('phonecatApp').
controller('SuspiciousUserController', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.loadData = function() {
        console.log($routeParams.id);
        $scope.loading = false;
    };

    $scope.loadData();
}]);