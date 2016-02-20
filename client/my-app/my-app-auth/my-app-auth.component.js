(function() {
  "use strict";

  angular.module('myapp').directive('myAppAuth', function() {
    return {
      restrict: 'E',
      templateUrl: 'client/my-app/my-app-auth/my-app-auth.html',
      controllerAs: 'myAppAuth',
      controller: function($scope, $stateParams, $reactive) {
        $reactive(this).attach($scope);
      }
    };
  });

})();
