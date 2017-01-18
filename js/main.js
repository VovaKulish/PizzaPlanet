$(document).ready(function () {

    $('.background-callback, .close').click(function(){
    $('#modal-callback').css('display', 'none');
});

    $('.show-modal').click(function(){
        $('#modal-callback').css('display', 'block');
    });

    $('.background-bucket').click(function(){
        $('#modal-bucket').css('display', 'none');
    });

    $('.show-bucket').click(function () {
        $('#modal-bucket').css('display', 'block');

    });

    $('.item-delete').click(function(){
        $(this).parents().eq(3).remove();
    });

    $('.confirmed-address').on('input keyup', function () {
        $('.save').addClass('visible');
    });

    $('.product-descr').click(function(event){
        event.preventDefault();
        $(".product-descr").removeClass('active');
        $(this).addClass('active');
    });

    var $dashedname = $('.dashed-name'),
        $dashedphone = $('.dashed-phone'),
        $dashedaddress = $('.dashed-address'),
        $dashedbuffer = $('.input-buffer');

    $dashedname.on('input', function() {
        $dashedbuffer.text($dashedname.val());
        $dashedname.width($dashedbuffer.width());
    });

    $dashedphone.on('input', function() {
        $dashedbuffer.text($dashedphone.val());
        $dashedphone.width($dashedbuffer.width());
    });

    $dashedaddress.on('input', function() {
        $dashedbuffer.text($dashedaddress.val());
        $dashedaddress.width($dashedbuffer.width());
    });



    var num = $('.number');
    $('.minmax').on('click', function(){
        var newVal = +num.val() - ($(this).val().charCodeAt(0) -44);
        if( newVal < 1) newVal = 1;
        num.val( newVal);
    });


$('.switch input[type=checkbox]').change(function () {
    var parent = $($(this).closest('.diameters'));

    var firstChild = $(parent.find('.diameter-col:first'));

    var lastChild = $(parent.find('.diameter-col:last'));

    var deactivated = $(this).is(":checked") ? firstChild : lastChild;
    var beActive = !$(this).is(":checked") ? firstChild : lastChild;

    beActive.addClass('active');
    beActive.find('.diameter-picture').attr('src', 'img/graphics/diameter_active.svg');
    deactivated.find('.diameter-picture').attr('src', 'img/graphics/diameter.svg');
    deactivated.removeClass('active');

});

$.each($('.switch input[type=checkbox]'), function (i, item) {
    $(item).trigger('change');
});
})
;