(function () {
    'use strict';

    angular
        .module('app.basic-info')
        .config(Config);

    function Config($stateProvider, ResourceProvider) {
        // State
        $stateProvider
            .state('basic-info', {
                url: '/basic-info',
                templateUrl: 'app/main/basic-info/basic-info.html',
                controller: 'BasicInfoController as vm',
                resolve: { }
            });

        // Resource set state name
        ResourceProvider.setState('basic-info');
    };

})();