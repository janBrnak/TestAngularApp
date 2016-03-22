(function () {
    'use strict';

    angular
        .module('app.another-info')
        .config(Config);

    function Config($stateProvider, ResourceProvider) {
        // State
        $stateProvider
            .state('another-info', {
                url: '/another-info',
                templateUrl: 'app/main/another-info/another-info.html',
                controller: 'AnotherInfoController as vm',
                onEnter: function ($state, Resource) {
                    var basicInfoForm = Resource.getComponent('basic-info', 'form');
                    
                    // check data
                    if (!basicInfoForm)
                        $state.go('basic-info');
                }
            });

        // Resource set state name
        ResourceProvider.setState('another-info');
    };

})();