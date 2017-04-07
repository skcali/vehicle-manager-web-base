(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController);

    SalesGridController.$inject = ['salesFactory', 'SweetAlert'];

    /* @ngInject */
    function SalesGridController(salesFactory, SweetAlert) {
      var vm = this;

      vm.deleteSale = function(sale) {
          SweetAlert.swal({
                  title: "Are you sure?",
                  text: `You will not be able to recover the sale data!`,
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Yes, delete it!",
                  closeOnConfirm: false
              },
              function(isConfirm) {
                  if (isConfirm) {
                      SweetAlert.swal("Deleted!");
                      salesFactory
                          .remove(sale.saleId)
                          .then(function() {
                              vm.sales.splice(vm.sales.indexOf(sale), 1);
                          });
                  } else {
                      SweetAlert.swal("Your sale info is safe!");
                  }
              });
      };

      activate();

      function activate() {
          salesFactory
              .getAll()
              .then(function(data) {
                  vm.sales = data;
              })
              .catch(function(error) {
                  alert(error);
              });
      }
    }
})();
