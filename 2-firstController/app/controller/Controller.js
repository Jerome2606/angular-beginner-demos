(function() {
    'use strict';

    angular
        .module('app')
        .controller('Controller', ControllerController);

    ControllerController.$inject = [];
    function ControllerController() {
        var vm = this;
        
        //data-ng-init="entries=[{name:'Alan', price:60},{name:'Josh', price:50},{name:'Daniela', price:40.5}]"
        vm.entries = [{name:'Alan', price:60},{name:'Josh', price:50},{name:'Daniela', price:40.5}];

        activate();

        ////////////////

        function activate() { }
    }
})();