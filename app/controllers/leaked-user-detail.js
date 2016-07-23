'use strict';

angular.
module('phonecatApp').
controller('LeakedUserDetailController', ['$scope', '$http', '$routeParams', 'leakedUserFactory', function($scope, $http, $routeParams, leakedUserFactory) {
    $scope.data = {};
    $scope.noUser = false;
    $scope.noData = false;

    $scope.loadData = function() {
        var email = $routeParams.email;

        $scope.email = email;
        $scope.getUser(email);
        $scope.fetchExternalAPI(email);
    };


    $scope.fetchExternalAPI = function(email) {
        leakedUserFactory.getData(email)
            .success(function(data) {
                $scope.data = data;
            })
            .error(function(error) {
                $scope.noData = true;
            });
        return true;
    };

    $scope.getUser = function(email) {
        leakedUserFactory.getUser(email)
            .success(function(data) {
                $scope.user = data.data;
            })
            .error(function(error) {
                $scope.noUser = true;
            });
        return true;
    };

    $scope.loadData();
}]);