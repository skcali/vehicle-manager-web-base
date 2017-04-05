(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController);

    CustomersGridController.$inject = ['customersFactory', 'SweetAlert'];

    /* @ngInject */
    function CustomersGridController(customersFactory, SweetAlert) {
        var vm = this;

        vm.deleteCustomer = function(customer) {
            SweetAlert.swal({
                    title: "Are you sure?",
                    text: `You will not be able to recover ${customer.firstName}'s data!`,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        SweetAlert.swal("Deleted!");
                        customersFactory
                            .remove(customer.customerId)
                            .then(function() {
                                vm.customers.splice(vm.customers.indexOf(customer), 1);
                            });
                    } else {
                        SweetAlert.swal("Your file is safe!");
                    }
                });
        };

        activate();

        function activate() {
            customersFactory
                .getAll()
                .then(function(data) {
                    vm.customers = data;
                })
                .catch(function(error) {
                    alert(error);
                });
        }
    }
})();
