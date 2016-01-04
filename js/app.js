// app.js


var mainApp = angular.module('appModule', ['ui.router']);

mainApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home.list');
    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
        url : '/home',
        templateUrl : 'partials/home.html'
    })
    .state('home.list', {
        url : '/list',
        templateUrl : 'partials/about.html'
    })
    .state('home.data', {
        url : '/data',
        templateUrl : 'partials/data.html'
    })
    .state('home.homelist', {
        url : '/homelist:listId',
        templateUrl : 'partials/home-list.html',
        controller : 'mainController'
        
    })
})

mainApp.controller('mainController', ['$scope','$stateParams',function($scope, $stateParams){
    //$scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
    console.log($stateParams.listId);
}])