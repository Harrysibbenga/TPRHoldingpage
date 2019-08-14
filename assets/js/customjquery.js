$("#year").text(new Date().getFullYear());

$('.carousel').carousel();

$('button').click(function (){
    if ($('div').hasClass('show')){
        $(this).addClass('clicked');
    } else {
        $(this).removeClass('clicked');
    }
});



