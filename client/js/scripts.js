
var ENDPOINT = 'http://localhost:5000';
var editor;

function updateSuggestions(result) {
    console.log('Update suggestions, sailor');
}


function pushToServer() {

    $.ajax({
        url: ENDPOINT + '/suggestions',
        type: 'POST',
        data: JSON.stringify({text: editor.getText()}),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: updateSuggestions
    });
}

$(document).ready(function () {
    var pushToServerTimer;

    editor = new Quill('#editor', {
        theme: 'snow'
    });
    editor.addModule('toolbar', {
        container: '#toolbar'     // Selector for toolbar container
    });

    editor.on('text-change', function (){

        console.log('tetchange');

        if (typeof(pushToServerTimer) === 'undefined') {
            pushToServerTimer = window.setTimeout(pushToServer, 1000);
        } else {
            window.clearTimeout(pushToServerTimer);
            pushToServerTimer = window.setTimeout(pushToServer, 1000);
        }
    });
});
