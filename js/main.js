$(function(){
    $('.btn_close').click(function(){
        $('.popup').slideUp()

    })

    $(document).ready(function(){
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    dots: true,
    arrows: true,
    });
    });

    $('.gnb').mouseenter(function(){
        $('.header_wrap').stop().animate({'height':350},300)
        $('.depth2').stop().slideDown(300);
    })

    $('.header_wrap').mouseleave(function(){
        $('.depth2').stop().slideUp(300);
        $('.header_wrap').stop().animate({'height':103},300)
    })

    
    $(window).scroll(function(){
        
        let num = $(this).scrollTop()
        if(num>=800){
            $('.btn_top').fadeIn()
        }else{
            $('.btn_top').fadeOut()
        }

    })
    $('.tab li').click(function(){
        let num =$(this).index()
        console.log(num)
        $('.tab li').removeClass('on')
        $(this).addClass('on')
        $('.list').hide()
        $('.list').eq(num).show()
    })
    
    $('.btn_top').click(function(){
        $('body,html').animate({scrollTop:0})
    })
});