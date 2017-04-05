(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', '$stateParams'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, $stateParams) {
        var vm = this;

        vm.id = $stateParams.id;
        /*
        function activate() {
          customersFactory
          .getById($statsParams.id)
          .then(function(customer) {
            vm.customer = customer;
          });*/
        }
})();
