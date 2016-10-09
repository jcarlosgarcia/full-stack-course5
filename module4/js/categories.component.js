(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
    templateUrl: 'module4/js/templates/categories-list.template.html',
    bindings: {
      items: '<'
    }
  });

})();