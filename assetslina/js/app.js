$(function () {


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
    $(".tooltip a").hover(function () {
        $(this).next("span").animate({ opacity: "show", top: "-75" }, "slow");
    }, function () {
        $(this).next("span").animate({ opacity: "hide", top: "-85" }, "fast");
    });








    // 問１
    $('.answer1').fadeOut();


    $('input').one('click', function () {
        if ($(this).val() == 2) {
            $('.seikai1').remove();
            $('.answer1').fadeOut();


            // alert('正解！');
            $('.answer1').append('<img src="../assetslina/img/img_album.png" alt="">').hide().fadeIn('slow');
            $('.nextlink1').append('<p>アタリだよ！</br>1994年3月1日、オンタリオ州ロンドンの聖ヨセフ病院で生まれ、オンタリオ州ストラトフォードで育った</br>父ジェレミー・ビーバーと母パティ・マレットの間に生まれた。パティが妊娠したのは17歳の時であった。ジェレミーとパティは結婚しなかったが、息子の私的生活や職業生活について同じ目標があり親交を持ち続けた。パティは、母ダイアンと継父ブルースの助けを借りて息子を育てた。ｘ</p>').hide().fadeIn('slow');
            $('.nextlink1').append('<a href="../article/article2.html">次のスキャンダルを見る</a>').hide().fadeIn('slow');

        } else {


            alert('はずれだよ　もう一度で直してこい').one();

            $('radio').prop('disabled', false);
        }
    });


    // 問２
    $('.answer2').fadeOut();


    $('input').one('click', function () {

        if ($(this).val() == 2) {
            $('.seikai2').remove();

            $('.answer2').fadeOut();


            // alert('正解！');
            $('.answer2').append('<img src="../assetslina/img/susi.jpg" alt="">').hide().fadeIn('slow');
            $('.nextlink2').append('<p>アタリだよ！</br>寿司は好きだけど、ある日アレルギーが出てそれ以降食べていないらしい</p>').hide().fadeIn('slow');
            $('.nextlink2').append('<a href="../article/article3.html">次のスキャンダルを見る</a>').hide().fadeIn('slow');

        } else {


            alert('はずれだよ　もう一度で直してこい');

            $('radio').prop('disabled', false);
        }
    });



















});