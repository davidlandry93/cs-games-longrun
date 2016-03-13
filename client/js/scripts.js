
function pushToServer() {
    console.log('Push! Harder!');
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
