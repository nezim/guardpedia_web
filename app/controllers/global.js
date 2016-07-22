'use strict';

angular.
module('phonecatApp').
controller('GlobalController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
}]);