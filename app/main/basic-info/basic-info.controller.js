(function () {
    'use strict';

    angular
        .module('app.basic-info')
        .controller('BasicInfoController', BasicInfoController);

    function BasicInfoController($state, Resource) {
        var vm = this;
        var basicInfo = Resource.getComponent('basic-info', 'form');

        // Data
        vm.title = "Basic Info";
        vm.form = basicInfo;

        // Methods
        vm.submit = submit;

        //////////

        function submit(data) {
            if (data && Resource.set('basic-info', 'form', data))
                $state.go('another-info');
        }
    }

})();