(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardFactory', dashboardFactory);

    dashboardFactory.$inject = [];

    /* @ngInject */
    function dashboardFactory() {
        var vm = this;
        var service = {
        };

        return service;

    }
})();
