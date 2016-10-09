(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
    templateUrl: 'js/templates/categories-list.template.html',
    bindings: {
      items: '<'
    }
  });

})();