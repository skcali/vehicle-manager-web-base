(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesGridController', VehiclesGridController);

    VehiclesGridController.$inject = ['vehiclesFactory', 'SweetAlert'];

    /* @ngInject */
    function VehiclesGridController(vehiclesFactory, SweetAlert) {
      var vm = this;

      vm.deleteVehicle = function(vehicle) {
          SweetAlert.swal({
                  title: "Are you sure?",
                  text: `You will not be able to recover the vehicle data!`,
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Yes, delete it!",
                  closeOnConfirm: false
              },
              function(isConfirm) {
                  if (isConfirm) {
                      SweetAlert.swal("Deleted!");
                      vehiclesFactory
                          .remove(vehicle.vehicleId)
                          .then(function() {
                              vm.vehicles.splice(vm.vehicles.indexOf(vehicle), 1);
                          });
                  } else {
                      SweetAlert.swal("Your vehicle is safe!");
                  }
              });
      };

      activate();

      function activate() {
          vehiclesFactory
              .getAll()
              .then(function(data) {
                  vm.vehicles = data;
              })
              .catch(function(error) {
                  alert(error);
              });
      }
    }
})();
