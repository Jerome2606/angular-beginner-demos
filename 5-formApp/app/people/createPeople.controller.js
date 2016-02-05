(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('CreatePeopleController', CreatePeopleController);

    CreatePeopleController.$inject = ['$state', '$scope', 'dataservice'];
    function CreatePeopleController($state,$scope,dataservice) {
        var vm = this;
        
        vm.people = {};
        vm.submitNewPeople = submitNewPeople;
        vm.showValidationError = false;

        activate();
        
        //////////////

        function activate() {
            
        }
        
        function submitNewPeople(){
            if ($scope.createForm.$invalid){
                vm.showValidationError = true;
                return;
            }
            vm.showValidationError = false;
            
            dataservice.setPeople(vm.people).then(
                function(result){
                    //TODO: set ok
                    $state.go('home');
                },
                function (error){
                    
                }
            );
        }
    }
})();