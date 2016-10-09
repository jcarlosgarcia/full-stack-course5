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
      templateUrl: '../module4/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: '../module4/templates/categories.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: '../module4/templates/items.template.html',
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