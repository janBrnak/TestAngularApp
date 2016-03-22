(function () {
    'use strict';

    angular
        .module('app.another-info')
        .controller('AnotherInfoController', AnotherInfoController);

    function AnotherInfoController($state, Resource) {
        var vm = this;
        var basicInfo = Resource.getComponent('basic-info', 'form');
        var anotherInfo = Resource.getComponent('another-info', 'form');
        var color = {
                male: ['blue', 'green', 'black'], 
                female: ['pink', 'orange', 'yellow']
            };

        // Data
        vm.title = "Another Info";
        vm.listOfColors = color[basicInfo.gender];
        vm.form = anotherInfo;
        
        // Methods
        vm.submit = submit;
        //////////

        function submit(data) {
            if (data && Resource.set('another-info', 'form', data))
                $state.go('summary-info');
        }
    }

})();