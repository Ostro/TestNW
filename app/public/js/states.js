app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
    ;

    $urlRouterProvider
        .when('/', '/home')
        .otherwise('/home')
    ;
}]);
