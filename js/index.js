// paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });
    $('.jumbotron h3').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });

    // profil
    if(wScroll > 200) {
        $('.profil .bio').each(function(h){
            setTimeout(function() {
                $('.profil .bio').eq(h).addClass('keluar');      
            }, 300 * (h+1));
        });
    }
    // portfolio
    if(wScroll > 600) {
    $('.portfolio .thumbnail').each(function(i){
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');      
            }, 300 * (i+1));
    });
    }

});

