(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['dataservice'];
    function HomeController(dataservice) {
        var vm = this;
        
        vm.peoples = {};

        activate();
        
        //////////////

        function activate() {
            getPeople().then(function(data){
                vm.peoples = data;    
            })
            
        }
        
        function getPeople(){
            return dataservice.getPeople();
        }
    }
})();