(function () {
    'use strict';

    angular
        .module('app.summary-info')
        .controller('SummaryInfoController', SummaryInfoController);

    function SummaryInfoController(Resource) {
        var vm = this;
        var basicInfo = Resource.getComponent('basic-info', 'form');
        var anotherInfo = Resource.getComponent('another-info', 'form');

        // Data
        vm.title = "Summary Info";
        vm.basicInfo = basicInfo;
        vm.anotherInfo = anotherInfo;
        vm.statsDataBestBooks = [
                    { key: 'Moby Dick by Herman Melville', value: 2,},
                    { key: 'Hamlet by William Shakespeare', value: 6,},
                    { key: 'War and Peace by Leo Tolstoy', value: 8,},
                    { key: 'The Divine Comedy by Dante Alighieri', value: 12,},
                    { key: 'Lolita by Vladimir Nabokov', value: 9,},
                ];
        vm.statsDataBestColors = [
                    { key: 'Pink', value: 4,},
                    { key: 'Yellow', value: 6,},
                    { key: 'Blue', value: 7,},
                    { key: 'Green', value: 12,},
                    { key: 'Black', value: 2,},
                ];

        // Methods

        //////////
    }

})();