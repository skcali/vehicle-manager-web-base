(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['salesFactory', 'SweetAlert'];

    /* @ngInject */
    function SalesGridController(salesFactory, SweetAlert) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
