'use strict';

app.directive("interfaceDirective", function ($compile) {
    return {
        restrict: 'A',
        template: '<button type="button" class="btn btn-danger" ng-click="MockData()" >Mock</button>'
    };
});



app.directive('myText', function ($compile, $scope) {
    var template = '<button type="button" class="btn btn-danger" ng-click="MockData()';
    return {
        restrict: 'A',
        template: template,
        link: function (scope, ele, attr) {
            ele.on("click", function () {
                scope.$apply(function () {
                    var content = $compile(template)(scope);
                    element.append(content);
                })
            });
        }
    }
})
app.directive("interface2Directive", function () {
    return {
        template: '<h1 ng-click="test1()"> This is a Testing </h1>'
    };
});