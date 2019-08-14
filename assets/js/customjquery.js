$.noConflict();
jQuery( document ).ready(function( $ ) {

    $("#year").text(new Date().getFullYear());

    $('.carousel').carousel();

    $('button').click(function (){
        if ($(this).parent().siblings('.collapse').hasClass('show')){
            $(this).addClass('clicked');
        } else {
            $(this).removeClass('clicked');
        }
    });

});










