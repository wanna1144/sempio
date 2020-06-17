$(document).ready(function(){

  //mobile navigation event
  $(".m_btn").click(function(){
    $(".m_nav_bar").animate({"left":0}, 150);
    $(".overlay").fadeTo(300, 0.8);
  });

  $(".nav_close_btn, .overlay, .m_sub_nav li").click(function(){
    $(".m_nav_bar").animate({"left":"-400px"}, 150);
    $(".overlay").fadeOut();
  });

  //mobile navigation menu click sub_navigation slide
  $(".m_nav_list li").click(function(){
    var sub_list = $(this).attr("value");

    $(".m_nav_list li").removeClass("on");
    $(this).addClass("on");
    $(".m_sub_nav").animate({"right":"-190px"}, 100);
    $("#"+sub_list).animate({"right":0}, 100);
    var w_width = $(window).width();
    if(w_width < 400){
      $(".m_nav_box .m_nav_list").css({"width":"105px"});
    } else {
      $(".m_nav_box .m_nav_list").css({"width":"150px"});
    }
  });

  //resize event
  $(window).resize(function(){
    var winWidth = $(window).width();
    if(winWidth <= 1029){
      $(".m_nav_bar").animate({"left":"-400px"}, 150);
      $(".overlay").fadeOut();
    }
  });

  //scroll event
  $(window).on("scroll", function(){
    var scroll = $(window).scrollTop();

    if(scroll>100){
      $("header").addClass("small");
      $(".top_btn").fadeIn(300);
    }else{
      $("header").removeClass("small");
      $(".top_btn").fadeOut(300);
    }
  });

  //scrollTop event
  $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:0});
  });

  //navigation hover event
  $(".nav_list>li").on("mouseenter", function(){
    var show_num = $(this).attr("value");
    $(".sub_nav_list").stop().slideUp();
    $("."+show_num).stop().slideDown();
    $(".nav_bg").stop().slideDown("fast");
  });

  $(".market").on("mouseenter", function(){
    $(".nav_bg").hide();
    $(".sub_nav_list").hide();
  });

  $(".nav_bg, .sub_nav_list").on("mouseleave", function(){
    var show_num = $(this).attr("value");
    $(".sub_nav_list").stop().slideUp("fast");
    $(".nav_bg").stop().slideUp("fast");
  });

  //navigation hover under_line event
  $(".nav_list>li").on("mouseenter", function(){
    var liIndex=$(this).index();

    $(".under_line").css({"display":"block"});
    $(".under_line").animate({"left":liIndex * 20+"%"}, 100);
  });

  $(".nav_list>li").on("mouseleave", function(){
    $(".under_line").css({"display":"none"});
  });

  //slick slide event
  $('#slider').slick({
    dots: false,
    infinite: true,
    speed:300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows : false,
    autoplay : true,
		autoplaySpeed : 2000
  });

  //mouse hover div event
  $(".small_menu_div, .product_menu_div").on("mouseenter", function(){
    $(this).find(".hover_top").stop(true, true).animate({width:"100%"}, 200, function(){
      $(this).next(".hover_right").stop(true, true).animate({height:"100%"}, 200, function(){
        $(this).next(".hover_bottom").stop(true, true).animate({width:"100%"}, 200, function(){
          $(this).next(".hover_left").stop(true, true).animate({height:"100%"}, 200);
        });
      });
    });
  });

  $(".small_menu_div, .product_menu_div").on("mouseleave", function(){
    $(this).find(".hover_top").stop().delay(600).animate({width:0}, 200);
    $(this).find(".hover_right").stop().delay(400).animate({height:0}, 200);
    $(this).find(".hover_bottom").stop().delay(200).animate({width:0}, 200);
    $(this).find(".hover_left").stop().animate({height:0}, 200);
  });

});
