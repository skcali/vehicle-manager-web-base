(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory', '$stateParams', 'SweetAlert'];

    /* @ngInject */
    function CustomersDetailController(customersFactory, $stateParams, SweetAlert) {
        var vm = this;

        vm.save = function() {
          customersFactory
            .update(vm.customer.customerId, vm.customer)
            .then(function(){
              SweetAlert.swal("Customer saved!", "You're on fire today!", "success");
            })
        }

        activate();

        function activate() {
            var customerId = $stateParams.id;

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
})();
