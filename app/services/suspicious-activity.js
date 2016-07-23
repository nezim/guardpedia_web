'use strict';

angular.
module('phonecatApp').
factory('suspiciousActivityFactory', ['$http', function($http) {

    var suspiciousActivityFactory = {};

    suspiciousActivityFactory.getList = function(email) {


        var url = 'http://localhost:8080/suspicious-activity';
        if (email) {
            var qs = {};
            qs.email = email;
            url = url + '?' + $.param(qs);
            console.log(url);
        }

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

    suspiciousActivityFactory.getDetail = function(email) {
        var url = 'http://localhost:8080/suspicious-activity/' + email;
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

    return suspiciousActivityFactory;

}]);