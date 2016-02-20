(function() {
  "use strict";

  angular.module('myapp')
    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('myApp', {
          url: '/myapp',
          template: '<my-app-list></my-app-list>'
        })
        .state('myAppAuth', {
          url: '/myappauth',
          template: '<my-app-auth></my-app-auth>',
          resolve: {
            currentUser: function($q) {
              if (Meteor.userId() === null) {
                return $q.reject();
              } else {
                return $q.resolve();
              }
            }
          }
        });

      $urlRouterProvider.otherwise("/parties");
    })
    .run(function($rootScope, $state) {
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
          $state.go('myapp');
        }
      });
    });
})();
