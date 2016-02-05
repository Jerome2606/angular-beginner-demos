(function() {
'use strict';

    angular
        .module('myFirstApp')
        .controller('HelloWorldController', ControllerController);

    ControllerController.$inject = [];
    function ControllerController() {
        var vm = this;
        
        document.body.style.display = "initial";
        vm.name = 'World';

        activate();

        ////////////////

        function activate() { }
    }
})();