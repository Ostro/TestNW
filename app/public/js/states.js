app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl',
            resolve: {
                title: function() {
                    return 'Welcome home !'
                }
            }
        })

        .state('menu1', {
            url: '/menu1',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl',
            resolve: {
                title: function() {
                    return 'This is menu 1'
                }
            }
        })

        .state('menu2', {
            url: '/menu2',
            templateUrl: 'views/home.html',
            controller: 'MainCtrl',
            resolve: {
                title: function() {
                    return 'This is menu 2'
                }
            }
        })
    ;

    $urlRouterProvider
        .when('/', '/home')
        .otherwise('/home')
    ;
}]);
