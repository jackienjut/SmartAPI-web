'use strict';

app.controller('mainController', function ($scope) {

    $('#project_table').DataTable();

    $.get("http://localhost:8088/project/getall", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
});
