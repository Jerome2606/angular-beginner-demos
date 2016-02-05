(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state'];
    function NavbarController($state) {
        var vm = this;
        vm.isCurrent = isCurrent;

        activate();

        function activate() {  }

        function isCurrent(route) {
            if (!route || !$state.current || !$state.current.title) {
                return false;
            }
            var menuName = route;
            return $state.current.title.substr(0, menuName.length) === menuName;
        }
    }
})();