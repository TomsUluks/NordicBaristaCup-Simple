/**
 * Created by tomul on 06-Mar-17.
 */
$(document).ready(function ($) {
    $('.sponsor').hover(function (){
        $( this ).fadeOut(50);
        $( this ).fadeIn(200);
    });
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);

});