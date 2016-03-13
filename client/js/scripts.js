
var ENDPOINT = 'http://localhost:5000';

function updateSuggestions(result) {
    console.log('Update suggestions, sailor');
}


function pushToServer() {

    $.ajax({
        url: ENDPOINT + '/suggestions',
        type: 'POST',
        data: JSON.stringify({text: $('editor').text()}),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: updateSuggestions
    });
}

$(document).ready(function () {
    var pushToServerTimer;

    $(document).keypress(function (){
        if (typeof(pushToServerTimer) === 'undefined') {
            pushToServerTimer = window.setTimeout(pushToServer, 1000);
        } else {
            window.clearTimeout(pushToServerTimer);
            pushToServerTimer = window.setTimeout(pushToServer, 1000);
        }
    });
});
