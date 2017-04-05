customersFactory
    .remove(customer.customerId)
    .then(function(response) {
        vm.customers.splice(vm.customers.indexOf(customer), 1);
    });
