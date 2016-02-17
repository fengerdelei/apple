$(function(){
    $(window).resize(function(){
        if($(window).width()<=730){
            $('.header1').css('display','none');
            $('.header2').css('display','block');
            $('.nav1').css('display','none');
            $('.nav2').css('display','block');
        }else{
            $('.header1').css('display','block');
            $('.header2').css('display','none');
            $('.nav1').css('display','block');
            $('.nav2').css('display','none');
        }
    })
    $('span').click(function(){
        $('.list').finish();
        $('.list').slideToggle();
    });
    $('.nav2 .hh').click(function(){
        $(this).next().finish();
        $(this).next().slideToggle();
    });
    var num=0;
    var width=$('.box .inner').width();
    function move(){
        num++;
        $('.btn .btn-list').css({background:'',border:''});
        if(num==$('.box .inner').length-1){
            $('.box').animate({marginLeft:-num*width},function(){
                $('.box').css('margin-left','0');
            });
            num=0;
            $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
        }else{
            $('.box').animate({marginLeft:-num*width});
            $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
        }

    }
    //setInterval(move,1000);
    $('.btn .btn-list').eq(0).css({background:'#fff',border:'1px solid blue'});
    $('.btn .btn-list').click(function(){
        $('.btn .btn-list').css({background:'',border:''});
        var index=$(this).index();
        num=index;
        $(this).css({background:'#fff',border:'1px solid blue'});
        $('.box').animate({marginLeft:-num*width});
    })
    var aa;
    touch.on('.box','dragstart',function(){
        aa=$('.box')[0].offsetLeft;
    });
    touch.on('.box','drag',function(e){
        $('.box').css('margin-left',aa+e.x);
    });
    touch.on('.box','dragend',function(e){
        var width=$('.box .inner').width();

        if(Math.abs(e.x)>300|| e.factor<5){
            $('.btn .btn-list').css({background:'',border:''});
            if(e.direction=='left'){
                num++;
                if(num==$('.box .inner').length-1){
                    $('.box').animate({marginLeft:-num*width},function(){
                        $('.box').css('margin-left','0');
                    });
                    num=0;
                    $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
                }else{
                    $('.box').animate({marginLeft:-num*width});
                    $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
                }
            }else if(e.direction=='right'){
                num--;
                if(num==-1){
                    num=0;
                    $('.box').animate({marginLeft:-num*width});
                    $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
                    return;
                }else{
                    $('.box').animate({marginLeft:-num*width});
                    $('.btn .btn-list').eq(num).css({background:'#fff',border:'1px solid blue'});
                }
            }
        }else{
            $('.box').animate({marginLeft:-num*width});
        }
    });
    $('.box').mousedown(function(e){
        e.preventDefault();
    })
})