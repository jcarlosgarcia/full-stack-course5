(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
    templateUrl: 'full-stack-course5/module4/js/templates/categories-list.template.html',
    bindings: {
      items: '<'
    }
  });

})();