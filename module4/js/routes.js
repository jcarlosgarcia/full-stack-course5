(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);


  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'full-stack-course5/module4/js/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'full-stack-course5/module4/js/templates/categories.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'full-stack-course5/module4/js/templates/items.template.html',
      controller: "ItemsController as itemsList",
      resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      },
      params: {
        categoryShortName: null
      }
    });

  }
})();