$(document).ready(function(){

    $('.rwd-hamburger').click(function(e){
        $('.rwd-menu').slideToggle();
    });

    $('.rwd-close').click(function(e){
        $('.rwd-menu').slideToggle();
    });
    
    $('.rwd-menu,.desktop-menu').find('a').click(function(){
        let target=$(this).data('target');
        // console.log(target);
        let offset=$(target).offset().top;
        $('html,body').animate({
          scrollTop:offset
        });
        return false;
      });

      $("#gotop").click(function(){
        $("html,body").animate({
        scrollTop: 0  
        },1500);     
        return false;
        }); 
  
  $(window).scroll(function(){
    let h=$(window).scrollTop();
    if(h>600){
      $('#gotop').fadeIn();
    }else{
      $('#gotop').fadeOut();
    }
  });

  });