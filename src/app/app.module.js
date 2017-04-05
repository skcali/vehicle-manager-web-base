(function() {
    'use strict';

    angular
        .module('app', [
          'oitozero.ngSweetAlert',
          'ui.router',
          'app.customers',
          'app.dashboard',
          'app.sales',
          'app.vehicles'
        ])
        .value('apiUrl', 'http://localhost:57195/api/')
        .config(function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/dashboard');
          // Configure each one of our states
          $stateProvider
            .state('dashboard', {
              url: '/dashboard',
              controller: 'DashboardController as dashboardCtrl',
              templateUrl: 'app/dashboard/dashboard.html'
            })
            .state('customers', {
              url: '/customers',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('customers.grid', {
              url: '/grid',
              controller: 'CustomersGridController as customersGridCtrl',
              templateUrl: 'app/customers/customers.grid.html'
            })
            .state('customers.detail', {
              url: '/detail/:id',
              controller: 'CustomersDetailController as customersDetailCtrl',
              templateUrl: 'app/sales/customers.detail.html'
            })
            .state('sales', {
              url: '/sales',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('sales.grid', {
              url: '/grid',
              controller: 'SalesGridController as salesGridCtrl',
              templateUrl: 'app/sales/sales.grid.html'
            })
            .state('sales.detail', {
              url: '/detail/:id',
              controller: 'SalesDetailController as salesDetailCtrl',
              templateUrl: 'app/sales/sales.detail.html'
            })
            .state('vehicles', {
              url: '/vehicles',
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('vehicles.grid', {
              url: '/grid',
              controller: 'VehiclesGridController as vehiclesGridCtrl',
              templateUrl: 'app/vehicles/vehicles.grid.html'
            })
            .state('vehicles.detail', {
              url: '/detail/:id',
              controller: 'VehiclesDetailController as vehiclesDetailCtrl',
              templateUrl: 'app/vehicles/vehicles.detail.html'
            });
        });
})();
