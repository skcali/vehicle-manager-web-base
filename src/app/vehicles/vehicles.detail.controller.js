(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['vehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(vehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;
        var vehicleId = $stateParams.id;
        vm.save = function() {


            if (vehicleId) {
                vehiclesFactory
                    .update(vm.vehicle.vehicleId, vm.vehicle)
                    .then(function() {
                        SweetAlert.swal("Vehicle saved!", "You're on fire today!", "success");
                    });
            } else {
                vehiclesFactory
                    .create(vm.vehicle)
                    .then(function() {
                        SweetAlert.swal("Vehicle created!", "go get em tiger", "success");
                    });
            }
        }

        activate();

        function activate() {
            if (vehicleId) {
                vehiclesFactory
                    .getById(vehiclesId)
                    .then(function(vehicle) {
                        vm.vehicle = vehicle;
                    })
                    .catch(function(error) {
                        alert(error);
                    });
            }
        }
    }
})();
