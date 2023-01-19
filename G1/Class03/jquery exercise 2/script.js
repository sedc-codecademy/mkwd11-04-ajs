$(document).ready(function(){
    //when clicking add to the text add another text to it
    $(`div#clickMe`).click(function(e) {
        var oldText = $(this).text();
        $(this).text(oldText + 'Click added some text!');
    });
});