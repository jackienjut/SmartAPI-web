'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/main',
        templateUrl: 'views/main.html'
    }
    var documentState = {
        name: 'document',
        url: '/document',
        templateUrl: 'views/document.html'
    }
    var aboutusState = {
        name: 'aboutus',
        url: '/aboutus',
        templateUrl: 'views/aboutus.html'
    }

    var createproject = {
        name: 'createproject',
        url: '/createproject',
        templateUrl: 'views/createproject.html'
    }

    var showprojects = {
        name: 'showprojects',
        url: '/showprojects',
        templateUrl: 'views/showprojects.html'
    }
    var testing = {
        name: 'testing',
        url: '/testing',
        templateUrl: 'views/testing.html'
    }
    var team = {
        name: 'team',
        url: 'team',
        templateUrl: 'views/team.html'
    }
    $urlRouterProvider.otherwise('main');
    $stateProvider.state(mainState);
    $stateProvider.state(documentState);
    $stateProvider.state(aboutusState);
    $stateProvider.state(createproject);
    $stateProvider.state(showprojects);
    $stateProvider.state(testing);
    $stateProvider.state(team);


});