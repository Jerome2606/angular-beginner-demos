(function() {
    'use strict';

    angular
        .module('blocks.router')
        .config(routehelper);

    routehelper.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];
    function routehelper($locationProvider, $urlRouterProvider, $stateProvider) {
        
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/app/home/home.html',
                title: 'Home'
                // controller: 'HomeController',
                // controllerAs: 'vm'
            }) 
            .state('about', {
                url: '/about',
                templateUrl: '/app/home/about.html',
                title: 'About'
                // controller: 'AboutController',
                // controllerAs: 'vm'
            })
    }
})();
