'use strict';

angular.
module('phonecatApp').
controller('SuspiciousActivityController', ['$scope', '$http', '$routeParams', 'suspiciousActivityFactory', function($scope, $http, $routeParams, suspiciousActivityFactory) {

    $scope.loadData = function(email) {
        suspiciousActivityFactory.getList(email)
            .success(function(data) {
                $scope.data = data;
            })
            .error(function(error) {

            });
    };

    $scope.goToDetail = function(email) {
        location.href = '#/suspicious-activity/' + email;
    };

    $scope.searchData = function(email) {
        $scope.loadData(email);
    };

    $scope.loadData();
}]);