'use strict';

angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/user-tracking', {
      controller: 'UserTrackingController',
      templateUrl: 'views/user-tracking.html'
    }).
    when('/leaked-user', {
      controller: 'LeakedUserController',
      templateUrl: 'views/leaked-user.html'
    }).
    when('/leaked-user/:email', {
      controller: 'LeakedUserDetailController',
      templateUrl: 'views/leaked-user-detail.html'
    }).
    when('/suspicious-user/:id?', {
      controller: 'SuspiciousUserController',
      templateUrl: 'views/suspicious-user.html'
    }).

    otherwise('/user-tracking');
  }
]);