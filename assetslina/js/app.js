$(function(){

    
    var topBtn = $('.pagetop');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });



    // つーるちぷ
    $(".tooltip a").hover(function() {
        $(this).next("span").animate({opacity: "show", top: "-75"}, "slow");}, function() {
          $(this).next("span").animate({opacity: "hide", top: "-85"}, "fast");
        });









        $('.answer').fadeOut();
        

        $('input').one('click',function() {
            if ($(this).val() == 2) {
                $('.seikai').remove();
                $('.answer').fadeOut();
    

            // alert('正解！');
            $('.answer').append('<img src="../Vol5/assetslina/img/metal5.jpg" alt="">').hide().fadeIn('slow');
            $('.answer').append('<p>あああああああああああああああああああああああああああああああああああああああああああああああああ</p>').hide().fadeIn('slow');
            
        }else {

             
            alert('はずれだよ　もう一度で直してこい');

            $('radio').prop( 'disabled', false );
        }});





















  });