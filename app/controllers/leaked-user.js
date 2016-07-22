'use strict';

angular.
module('phonecatApp').
controller('LeakedUserController', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.loadData = function() {
        console.log("tes");
        $scope.loading = false;
    };

    $scope.loadData();

    $scope.goToDetail = function(email) {
        console.log(email);
        location.href = '#/leaked-user/' + email;
    };
}]);