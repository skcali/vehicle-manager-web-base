(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', '$stateParams', 'SweetAlert'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, $stateParams, SweetAlert) {
        var vm = this;
        var customerId = $stateParams.id;
        vm.save = function() {
            if (customerId) {
                customersFactory
                    .update(vm.customer.customerId, vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", "You're on fire today!", "success");
                    });
            } else {
                customersFactory
                    .create(vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer created!", "go get em tiger", "success");
                    });
            }
        }

        activate();

        function activate() {
            if (customerId) {
                customersFactory
                    .getById(customerId)
                    .then(function(customer) {
                        vm.customer = customer;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }
    }
})();
