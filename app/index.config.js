(function () {
    'use strict';

    angular
       .module('app')
       .config(Config);

    function Config($stateProvider, $urlRouterProvider) {
        // Route otherwise
        $urlRouterProvider.otherwise("/basic-info");
    }
	
})();