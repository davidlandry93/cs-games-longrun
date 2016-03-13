(function(document, window) {

    (function() {
        var editor = new Quill('#editor', {
            theme: 'snow'
        }); 
        editor.addModule('toolbar', {
            container: '#toolbar'     // Selector for toolbar container
        });
    })();
})(document, window);
