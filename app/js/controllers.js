'use strict';

app.controller('mainController', function ($scope) {

    $('#project_table').DataTable();

    $.get("http://116.62.50.226:8080/smartapi/project/getall", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
});
