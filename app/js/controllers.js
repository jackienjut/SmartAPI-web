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

app.controller('interfaceController', function ($scope) {
    $.get("http://116.62.50.226:8080/smartapi/interface/getALlInterface/1/1", function (data, status) {
        data = eval(data);
        var datas = new Array();

        var tbody = '';
        $.each(data, function (index, item) {
            tbody += '<tr><td>' + item.ID + '</td><td>' + item.scheme + '</td><td>' + item.host + '</td><td>'
                + item.method + '</td><td>' + item.parameters + '</td><td>' + item.header + '</td><td>' + item.notes + '</td>' +
                '<td><button type="button" class="btn btn-danger" onclick="MockData" >Mock</button></td></tr>'
        })

        $('#interface_table tbody').append(tbody);

        $('#interface_table').DataTable();
    });

    function MockData() {
        alert('aa');
    }
})
