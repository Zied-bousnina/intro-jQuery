$(document).ready(function(){
    var img = $('.img');
    width1 = img.width();
    height1 = img.height();
    console.log('width ' +width1 + ' height :' + height1);
    $('input[type=button]').click(function(){

        var l = $('input[name=long]').val();
        var h = $('input[name=hau]').val();
        img.width(l)
        img.height(h)
    })

    
})