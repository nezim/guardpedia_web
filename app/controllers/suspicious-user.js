'use strict';

angular.
module('phonecatApp').
controller('SuspiciousUserController', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.loadData = function() {
        $scope.loading = false;
    };

    $scope.goToDetail = function(email) {
        location.href = '#/leaked-user/' + email;
    };

    $scope.loadData();
}]);