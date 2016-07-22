'use strict';

angular.
module('phonecatApp').
controller('LeakedUserController', ['$scope', '$http', '$routeParams', 'leakedUserFactory', function($scope, $http, $routeParams, leakedUserFactory) {

    $scope.loadData = function() {
        leakedUserFactory.getList()
            .success(function(data) {
                $scope.data = data;
            })
            .error(function(error) {
                // error dialog, soon
            });
    };

    $scope.goToDetail = function(email) {
        location.href = '#/leaked-user/' + email;
    };

    $scope.loadData();
}]);