'use strict';

angular.
module('phonecatApp').
controller('LeakedUserDetailController', ['$scope', '$http', '$routeParams', 'leakedUserFactory', function($scope, $http, $routeParams, leakedUserFactory) {
    $scope.data = {};

    $scope.loadData = function() {
        var email = $routeParams.email;
        console.log(email);
        $scope.email = email;

        $scope.fetchExternalAPI(email);
        // $scope.data = data;
        $scope.loading = false;
    };


    $scope.fetchExternalAPI = function(email) {
        leakedUserFactory.getData(email)
            .success(function(data) {
                console.log(data);
                $scope.data = data;
            })
            .error(function(error) {
                // error dialog, soon
            });
        return true;
    };

    $scope.loadData();
}]);