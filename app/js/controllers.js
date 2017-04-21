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
