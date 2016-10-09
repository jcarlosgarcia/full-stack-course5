(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'module4/js/templates/items-list.template.html',
    bindings: {
      items: '<',
    },
  });
})();