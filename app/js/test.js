var app = angular.module('myApp1', ['ui.router']);

app.controller('MyCtrl1', [function () {

}])
app.controller('MyCtrl2', [function () {

}]);

app.config(function ($stateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        templateUrl: 'partials/partial1.html'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'partials/partial2.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

});
