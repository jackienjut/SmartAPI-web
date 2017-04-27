'use strict';

app.controller('mainController', function ($scope) {

    $.get("http://116.62.50.226:8080/smartapi/project/getall", function (data, status) {
        /*        alert("Data: " + data + "\nStatus: " + status);*/
        data = eval(data);
        var datas = new Array();
        $.each(data, function (index, item) {

            var dl = new Array();
            dl.push(item.id);
            dl.push(item.name);
            dl.push(item.creator);
            dl.push(item.createtime);
            dl.push(item.note);

            datas.push(dl);
        })

        $('#project_table').DataTable({
            data: datas,
            columns: [
                {title: "ID"},
                {title: 'Name'},
                {title: 'Creator'},
                {title: 'CreateTime'},
                {title: 'Note'}
            ]
        });
    });

    $scope.SaveProject = function () {

        alert('aa');

        var name = $('#name').val();
        var creator = $('#creator').val();
        var note = $('#note').val();

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: success,
            dataType: dataType
        });
    }
});

app.controller('interfaceController', function ($scope, $http, $compile, $log) {

    $http.get('http://116.62.50.226:8080/smartapi/interface/getALlInterface/1/1').success(function (response) {
        var data = eval(response);
        var tbody = '';
        $.each(data, function (index, item) {
            tbody += '<tr><td>' + item.ID + '</td><td>' + item.scheme + '</td><td>' + item.host + '</td><td>'
                + item.method + '</td><td>' + item.parameters + '</td><td>' + item.header + '</td><td>' + item.notes + '</td>' +
                '<td><button type="button" class="btn btn-danger" ng-click="MockData()" >Mock</button></td></tr>'
        })

        var $html = $compile(tbody)($scope);
        $('#interface_table tbody').append($html);
        $('#interface_table').DataTable();

    });

    $scope.MockData = function () {
        $log.log('aa')
        $('#mock').modal()
        $('#content').tab('show');
    }

    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

    $scope.MockTestData = function () {
        alert('Mock Test Data');
    }

    $scope.SimulateData = function () {
        alert('Simulate Data');
    }
})


