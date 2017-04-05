(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['vehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function VehiclesDetailController(vehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = function() {
            vehiclesFactory
                .update(vm.vehicle.vehicleId, vm.vehicle)
                .then(function() {
                    SweetAlert.swal("Vehicle saved!", "You're on fire today!", "success");
                })
        }

        activate();

        function activate() {
            var vehicleId = $stateParams.id;

            vehiclesFactory
                .getById(vehicleId)
                .then(function(vehicle) {
                    vm.vehicle = vehicle;
                })
                .catch(function(error) {
                    alert(error);
                });
        }
    }
})();
