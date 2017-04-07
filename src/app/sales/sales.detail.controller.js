(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory', 'SweetAlert', '$stateParams', 'customersFactory', 'vehiclesFactory'];

    /* @ngInject */
    function SalesDetailController(salesFactory, SweetAlert, $stateParams, customersFactory, vehiclesFactory) {
        var vm = this;
        activate();
        vm.save = function() {
            var saleId = $stateParams.id;

            vm.sale.customerId = vm.selectedCustomer.customerId;
            vm.sale.vehicleId = vm.selectedVehicle.vehicleId;

            if (saleId) {
                salesFactory
                    .update(vm.sale.saleId, vm.sale)
                    .then(function() {
                        SweetAlert.swal("Sale saved!", "You're on fire today!", "success");
                    });
            } else {
                salesFactory
                    .create(vm.sale)
                    .then(function() {
                        SweetAlert.swal("Sale created!", "go get em tiger", "success");
                    });
            }
        }


        function activate() {
            var saleId = $stateParams.id;

            customersFactory
                .getAll()
                .then(function(customer) {
                    vm.customers = customer;
                });

            vehiclesFactory
                .getAll()
                .then(function(vehicle) {
                    vm.vehicles = vehicle;
                });


            if (saleId) {
                salesFactory
                    .getById(saleId)
                    .then(function(sale) {
                        vm.sale = sale;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }
    }
})();
