// A hover menu start
$(function(){
    $("nav ul li").hover(function(){
        
        $(this).css({
            backgroundColor:'#000',
        }).children('a').css({color:'#FFF'}).stop().animate({left:'20px'},300)}, function(){
        $(this).css({backgroundColor:'#CCC'}).children('a').css({color:'#000'}).stop().animate({left:'0px'},300);
    });
})

// A hover menu end




// B.scrollmove menu start

 var spot = []
$(window).load(function(){
    
    
    
    $('.content>section').each(function(){
                    
        spot.push($(this).offset().top)
            
    })
    // console.log(spot)
        $('nav a').click(function(){
        
        var idx = $(this).parent().index();
            $('body,html').animate({
                scrollTop:spot[idx]
            })
            
          return false;    
    })
    
    
    
})

// B.scrollmove menu end


        
        
// C slide banner  start

$(function(){
    var idx=Math.floor(Math.random()*4)
    var slideWidth =$('.slidebanner').width();

    
    //reboot give addClass'on' for first li    
    $('.slidebanner li').eq(idx).addClass('on').children('img').css({
        display:'block'
    })
    
    
    
    // loof start
    var loof =setInterval(function(){
        $('.next').click()
    },4500)
    
    $('.slidebanner').mouseenter(function(){
        clearInterval(loof)
    }).mouseleave(function(){
        loof =setInterval(function(){
        $('.next').click()
        },4500)
    })
    // loof end





    //next btn start
    $('.next').click(function(){

        $('.slidebanner li').eq(idx).removeClass('on').children('img').animate({
            left:-slideWidth
        }).parent().next().addClass('on').children('img').css({
            display:'block',
            left:slideWidth
        }).animate({
            left:'0'
        })
        idx++
        console.log(idx)
        
        if(idx == $('.slidebanner li').length){
            idx=0
            
            $('.slidebanner li').eq(idx).children('img').css({
            left:slideWidth
            }).animate({
                left:0
            }).parent().addClass('on')
        }
        
    })
    //next btn end

    //prev btn start
    $('.prev').click(function(){
         $('.slidebanner li').eq(idx).removeClass('on').children('img').animate({
            left:slideWidth
        }).parent().prev().addClass('on').children('img').css({
            display:'block',
            left:-slideWidth
        }).animate({
            left:'0'
        })
        idx--
        console.log(idx)
        
        if(idx < 0){
            idx = $('.slidebanner li').length-1
            
            $('.slidebanner li').eq(idx).children('img').css({
                display:'block',
                left:-slideWidth
            }).animate({
                left:0
            }).parent().addClass('on')
        }
        
    })
    //prev btn end
  
    
  //click move start
    $('.slidebanner li a').click(function(){
        idx =$(this).parent().index()
        var his  = $('.slidebanner li.on').index()
              
        // console.log(idx)
        // console.log(his +' : his')
        
        if(idx > his){
            $('.slidebanner li.on').removeClass('on').children('img').animate({
                left:-slideWidth
            })
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:'100%'
            }).animate({
                left:'0'
            })
        }else if(idx < his){
            $('.slidebanner li.on').removeClass('on').children('img').animate({
                left:slideWidth
            })
            $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                display:'block',
                left:'-100%'
            }).animate({
                left:'0'
            })
        }
    })
  
  //click a end
  
})

// C slide banner end




// D fade banner start

    $(function(){
        
        fadeIdx=0
        
        $('.fadebanner li').eq(fadeIdx).addClass('on')
            
        var fadeloof = setInterval(function(){
            $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
            .fadeOut(1000)
            .parent().next().addClass('on').children('img').fadeIn(1300)
            
            fadeIdx++
            
            if(fadeIdx == $('.fadebanner li').size()){
                
                fadeIdx = 0
                 $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
                .fadeIn(1000)
            }
            console.log(fadeIdx)
        },4800)
        
        $('.fadebanner').mouseenter(function(){
            
            clearInterval(fadeloof)
            
        }).mouseleave(function(){
            
            fadeloof =setInterval(function(){
            $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
            .fadeOut(1000)
            .parent().next().addClass('on').children('img').fadeIn(1000)
            
            fadeIdx++
            
            if(fadeIdx == $('.fadebanner li').size()){
                
                fadeIdx = 0
                 $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
                .fadeIn(1000)
            }
            // console.log(fadeIdx)
            },4800)
            
        })
        

            
       
    })
    
// D fade banner end




// E sns move lis gellayu start

    $(function(){
        $('.movie-view li a').click(function(){
            var url =$(this).attr('href');
            var location = 'https://www.youtube.com/embed/'+url+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen'
            $('.view iframe').attr('src',location)
            
            
            $(this).parent().css({
                opacity:'0.5',
                backgroundColor:'#CCC'
            })
            
            
            return false
            
        })
    })

// E sns move lis gellayu end




// F wing banner start

        $(window).scroll(function(){
            var sct =$(this).scrollTop()
            $('.wing').stop().animate({
                top:sct
            },600)
        })

      $(window).trigger('resize')

// F wing banner end




// G layout popup
