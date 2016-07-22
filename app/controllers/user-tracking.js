'use strict';

angular.
module('phonecatApp').
controller('UserTrackingController', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.loadData = function() {
        console.log("tes");
        $scope.loading = false;
    };

    $scope.loadData();
}]);