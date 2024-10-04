$(function(){
    let sw=0;
    $(".menu_btn").click(function(){
        if(sw==0){
            sw=1;
            $(this).find("i").show();
            $(this).find("p").hide();
            $(".naviMenu").show();
        }else{
            sw=0;
            $(this).find("i").hide();
            $(this).find("p").show();
            $(".naviMenu").hide();
        }
    });
    $('.secMenu ul li ul').hide();
    $(".secMenu >ul >li").mouseenter(function(e){
        if($(this).index() !=2){
            $(this).find("ul").fadeIn();
            $(".subBg").show();
        }
    });
    $(".secMenu >ul >li").mouseleave(function(e){
        $(this).find("ul").hide();
        $(".subBg").hide();
    });
    //이벤트 슬라이드
    var swiper1 = new Swiper('.swiper1', { 
        autoplay:{
            delay:5000
        },
        direction:"vertical",   
        navigation: {   //네비게이션 사용자 설정
            nextEl: '.swiper-button-next',   //다음 버튼 클래스 설정
            prevEl: '.swiper-button-prev',   //이전 버튼 클래스 설정
        }, 
        pagination: {
            el: ".pagination_fraction",
            type: "fraction",
        },
        loop: true,   //슬라이드 반복
        loopedSlides: 0,
    });

    var swiper2 = new Swiper('.swiper2', {
        loop:true,
        loopedSlides: 0,
        pagination: {
            el: ".pagination_bullet",
            type:"bullets"
        },
    });

    //Main Swiper와 Thumbnail Swiper가 연동제어 서로를 제어
    swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;

    //.s3 .swiper의 autoplay, pause 버튼
    let swiper_sw=0;
    $(".autoBtn").click(function(){
        if(swiper_sw == 0){
            swiper_sw=1;
            $("i.fa-caret-right").show();
            $("i.fa-pause").hide();
            swiper1.autoplay.stop();
        }else{
            swiper_sw=0;
            $("i.fa-caret-right").hide();
            $("i.fa-pause").show();
            swiper1.autoplay.start();
        }
    });
    
    if($(window).width()>431){
        $('.s4BigBox').hide();
        $('.s4BigBox').eq(0).show();
        $('.s4Menu div a').click(function(e){
            e.preventDefault();
            let idx=$(this).parent().index();
            console.log(idx);
            $('.s4BigBox').hide();
            $('.s4BigBox').eq(idx).fadeIn();
        });
    }
    else{
        $('.s4BigBox').hide();
        $('.mobile2').hide();
        $('.mobile2').eq(0).show();
        $('.s4Menu div a').click(function(e){
            e.preventDefault();
            let idx=$(this).parent().index();
            console.log(idx);
            $('.mobile2').hide();
            $('.mobile2').eq(idx).fadeIn();
        });
    };
    
    //스크롤 js
    if($(window).width()<=430){
    var scrolling;
    var position = 0;
    var delta = 7;
    var hh = $('header').outerHeight();
    var dh = $(document).height();
    var wh = $(window).height();


    $(window).scroll(function(event) {
    scrolling = true;
    });

    setInterval(function() {
    if (scrolling) {
        scrollFunction();
        scrolling = false;
    }
    }, 250);

    function scrollFunction() {
        var st = $(this).scrollTop();

        if (Math.abs(position - st) <= delta)
            return;

        if (st > position && st > hh) {
            $('header').removeClass('scroll-down').addClass('scroll-up');
        } else {
            if (st + wh < dh) {
            $('header').removeClass('scroll-up').addClass('scroll-down');
            }
        }
            position = st;
        }
    }
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView : 2,
        spaceBetween: 10
    });
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView:2,
        spaceBetween:10
    });

    $('.mobile_menu nav ul li').first().addClass("active");
    $('.mobile_menu nav >ul >li >a').click(function(e){
    e.preventDefault();
    if($(this).attr('class') != 'active'){
      $('.mobile_menu nav ul li ul').slideUp();
      $(this).next().slideToggle();
      $('.mobile_menu nav ul li a').removeClass('active');
      $(this).addClass('active');
    }else{
        $('.mobile_menu nav ul li ul').slideUp();
        $(this).removeClass('active');
    }
    });
    $('.mobile_menu').css({'right':-500});
    let rg=0;
    $('.mobile >div >div:last-child >a').click(function(e){
        e.preventDefault();
        if(rg == 0){
            rg=1;
            $('.mobile_menu').show().animate({'right':0});
        }else{
            rg=0;
            $('.mobile_menu').hide().animate({'right':-500});
        }
    });
}); 
