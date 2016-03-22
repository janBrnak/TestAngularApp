(function () {
    'use strict';

    angular
        .module('app.summary-info')
        .config(Config);

    function Config($stateProvider, ResourceProvider) {
        // State
        $stateProvider
            .state('summary-info', {
                url: '/summary-info',
                templateUrl: 'app/main/summary-info/summary-info.html',
                controller: 'SummaryInfoController as vm',
                onEnter: function ($state, Resource) {
                    var basicInfoForm = Resource.getComponent('basic-info', 'form');
                    var anotherInfoForm = Resource.getComponent('another-info', 'form');
                    
                    // check data
                    if (!basicInfoForm && !anotherInfoForm)
                        $state.go('basic-info');
                    else if (basicInfoForm && !anotherInfoForm)
                        $state.go('another-info');
                }
            });

        // Resource set state name
        ResourceProvider.setState('summary-info');
    };

})();