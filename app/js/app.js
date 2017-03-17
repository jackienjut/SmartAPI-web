'use strict';

var app = angular.module('myApp', ['ui.router']);

app.controller("channel0", [function () {

        $('#stm').dropdown();
        $('#supplier').dropdown();
        $('#channel').dropdown();
        $('#origin').dropdown();

    $('input[name="daterange"]').daterangepicker();

}]);

app.config(function ($stateProvider) {
    var index0State = {
        name: 'index0',
        url: '/index/0',
        templateUrl: 'views/temp.html'
    }
    var custom0State = {
        name: 'custom0',
        url: '/custom/0',
        templateUrl: 'views/temp.html'
    }
    var keep0State = {
        name: 'keep0',
        url: '/keep/0',
        templateUrl: 'views/temp.html'
    }

    var cash0State = {
        name: 'cash0',
        url: '/cash/0',
        templateUrl: 'views/temp.html'
    }
    var invest0State = {
        name: 'invest0',
        url: '/invest/0',
        templateUrl: 'views/temp.html'
    }
    var vote0State = {
        name: 'vote0',
        url: '/vote/0',
        templateUrl: 'views/temp.html'
    }
    var marketactive0State = {
        name: 'marketactive0',
        url: '/marketactive/0',
        templateUrl: 'views/temp.html'
    }
    var marketmoney0State = {
        name: 'marketmoney0',
        url: '/marketmoney/0',
        templateUrl: 'views/temp.html'
    }
    var channel0State = {
        name: 'channel0',
        url: '/channel/0',
        templateUrl: 'views/channel/channel0.html',
        controller: 'channel0'
    }

    $stateProvider.state(index0State);
    $stateProvider.state(custom0State);
    $stateProvider.state(keep0State);
    $stateProvider.state(cash0State);
    $stateProvider.state(invest0State);
    $stateProvider.state(vote0State);
    $stateProvider.state(marketactive0State);
    $stateProvider.state(marketmoney0State);
    $stateProvider.state(channel0State);

});