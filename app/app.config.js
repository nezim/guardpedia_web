'use strict';

angular.
module('phonecatApp').
config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/suspicious-activity', {
      controller: 'SuspiciousActivityController',
      templateUrl: 'views/suspicious-activity.html'
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

    otherwise('/suspicious-activity');
  }
]);