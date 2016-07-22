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
                'Content-Type': undefined,
            },
            mimeType: 'multipart/form-data',
        };

        var result = $http(req);

        return result;
    };

    return leakedUserFactory;

}]);