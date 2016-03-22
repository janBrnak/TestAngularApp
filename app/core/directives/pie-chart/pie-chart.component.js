(function () {
    'use strict';

    angular
        .module('app.core')
        .component('pieChart', {
            controller: pieChart,
            templateUrl: 'app/core/directives/pie-chart/pie-chart.html',
            bindings: {
                title: '@',
                data: '=',
            },
        });

    function pieChart() {
        var ctrl = this;

        // Data
        ctrl.pieChartConfig = {chart: 
            {
                type: 'pieChart',
                height: 200,
                x: function (d) { return d.key; },
                y: function (d) { return d.value; },
                showLabels: false,
                labelSunbeamLayout: false,
                labelThreshold: 0.01,
                labelsOutside: true,
                donut: false,
                transitionDuration: 500,
                showLegend: false,
                growOnHover: false,
                margin: {top: 0, right: 0, bottom: 0, left: 0}
            }
        }
    }
    
})();