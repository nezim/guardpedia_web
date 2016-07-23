'use strict';

angular.
module('phonecatApp').
factory('leakedUserFactory', ['$http', function($http) {

    var leakedUserFactory = {};

    leakedUserFactory.getData = function(email) {
        var url = 'https://haveibeenpwned.com/api/v2/breachedaccount/' + email;
        var req = {
            async: true,
            crossDomain: true,
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            },
            mimeType: 'multipart/form-data',
        };

        var result = $http(req);

        return result;
    };

    leakedUserFactory.getList = function() {
        var url = 'http://localhost:8080/leaked-user';
        var req = {
            async: true,
            crossDomain: true,
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            },
        };

        var result = $http(req);

        return result;
    };

    leakedUserFactory.getUser = function(email) {
        var url = 'http://localhost:8080/leaked-user/' + email;
        var req = {
            async: true,
            crossDomain: true,
            url: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json'
            },
        };

        var result = $http(req);

        return result;
    };

    return leakedUserFactory;

}]);