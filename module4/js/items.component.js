(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'full-stack-course5/module4/js/templates/items-list.template.html',
    bindings: {
      items: '<',
    },
  });
})();