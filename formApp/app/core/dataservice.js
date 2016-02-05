(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', '$firebaseArray'];
    function dataservice($http, $q, $firebaseArray) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getCount,
            setPeople: setPeople
        };
        
        // connect to firebase 
        var _ref = new Firebase("https://sweltering-fire-8071.firebaseio.com/");

        return service;

        function getCount() { return $q.when(72); }

        function getPeople() {
            var deferred = $q.defer();
            var $peoples = $firebaseArray(_ref.child("people"));

            deferred.resolve($peoples);

            return deferred.promise;
        }

        function setPeople(data) {
            var deferred = $q.defer();
            try {
                var $peoples = _ref.child("people").push(data);

                deferred.resolve($peoples);
            } catch (ex) {
                deferred.reject(ex);
            }
            return deferred.promise;
        }
    }
})();