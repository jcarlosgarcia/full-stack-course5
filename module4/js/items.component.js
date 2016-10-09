(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'js/templates/items-list.template.html',
    bindings: {
      items: '<',
    },
  });
})();