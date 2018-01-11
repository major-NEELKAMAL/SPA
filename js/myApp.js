var myApp = angular.module('myApp', ['ui.router','ngSanitize']);

myApp.config(function($stateProvider,$urlRouterProvider) {


    $stateProvider

    .state('home',{
        url :'/home',
        templateUrl : 'partials/home.html'
    })

    .state('howItWorks',{
            url : '/howItWorks',
            templateUrl : 'partials/howItWorks.html',
            controller : 'HowItWorks'
    })
    .state('aboutUs',{
            url : '/aboutUs',
            templateUrl : 'partials/aboutUs.html'
    })
    .state('contactUs',{
            url : '/contactUs',
            templateUrl : 'partials/contactUs.html',
            controller : 'ContactUs'

    });
    $urlRouterProvider.otherwise('home');

});