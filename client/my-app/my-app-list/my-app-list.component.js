(function() {
  "use strict";

  angular.module('myapp').directive('myAppList', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/my-app/my-app-list/my-app-list.html',
      controllerAs: 'myAppList',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

      }
    };
  });
})();
