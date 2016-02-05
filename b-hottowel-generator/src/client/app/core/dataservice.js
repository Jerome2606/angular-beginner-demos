(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$firebaseRef', '$q', '$firebaseArray', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($firebaseRef, $q, $firebaseArray, exception, logger) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };
        
        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            
            var deferred = $q.defer();
            var $peoples = $firebaseArray($firebaseRef().child('people'));
            
            deferred.resolve($peoples);
        
            return deferred.promise;
        }
    }
})();
