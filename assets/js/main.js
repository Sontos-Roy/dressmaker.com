$(document).ready(function () {
    $(".icon-signin").click(function () {
      $("#signin").css("right", "0");
      $("#overlay").fadeIn("fast");
    });
    $("#overlay, #signin-dismiss").click(function () {
      $("#signin").css("right", "-400px");
      $("#overlay").fadeOut("fast");
    });
    $(".icon-cart").click(function () {
      $("#cart").css("right", "0");
      $("#overlay").fadeIn("fast");
    });
    $("#overlay, #cart-dismiss").click(function () {
      $("#cart").css("right", "-400px");
      $("#overlay").fadeOut("fast");
    });
    $(".toggle-menu").click(function () {
      $(".nav-sidebar").css("left", "0");
      $("#overlay").fadeIn("fast");
    });
    $("#overlay, .nav-dismiss").click(function () {
      $(".nav-sidebar").css("left", "-400px");
      $("#overlay").fadeOut("fast");
    });
    $("#shop-filter").click(function () {
      $(".shop-sidebar").css("left", "0");
      $("#overlay").fadeIn("fast");
    });
    $("#overlay, .shop-nav-dismiss").click(function () {
      $(".shop-sidebar").css("left", "-400px");
      $("#overlay").fadeOut("fast");
    });

    $(".icon-search").click(function () {
      $(".search-zoom").slideDown();
      $("#overlay-search").fadeIn("fast");
    });
    $("#overlay-search, .search-dismiss").click(function () {
      $(".search-zoom").slideUp();
      $("#overlay-search").fadeOut("fast");
    });
    $(".category-shop-toggler").on('click', function(){
      $(".cat-side-toggler").stop().slideToggle();
      $(this).toggleClass('active');
    })
    $(".ava-shop-toggler").on('click', function(){
      $(".ava-side-toggler").stop().slideToggle();
      $(this).toggleClass('active');
    })
    $(".ava-shop-price").on('click', function(){
      $(".price-range").stop().slideToggle();
      $(this).toggleClass('active');
    })

});
$(document).ready(function(){
  $(".size-view .sizes div").click(function(){
      $('.size-view .sizes div').removeClass('active');
      $(this).addClass('active');
      var value = $(this).text();
      $('#sizes').text(value);
  });
  var value1 = $('.quantity #quntity-value').val();
  var value2 = parseInt(value1);
  $(".quantity .dec").click(function(){
    value2--;
    if(value2 > 1){
        $("#quntity-value").val(value2);
      }else{
        value2 = 1;
        $("#quntity-value").val(value2);
        
      }
  });
  $(".quantity .inc").click(function(){
      var qunt = value2++;
      $("#quntity-value").val(qunt);
  });
});
$(document).ready(function(){
  $('.buy-form').hide();
  $('.buy-modal-form').click(function(){
      $('.modal-details').slideUp();
      $('.buy-form').slideDown();
      $(this).hide();
  })
  $('.btn-close').click(function(){
      $('.modal-details').slideDown();
      $('.buy-form').slideUp();
      $('.buy-modal-form').show();
  })
});
$(window).scroll(function(event){
    var scroll_pos = $(window).scrollTop()
    if(scroll_pos > 100){
        $(".navbar").css({"position": "fixed"});
        $(".navbar").slideDown();
    
    }else{
      $(".navbar").css({"position": "relative"});
    }
});


$(document).ready(function(){

  $(".nav-sidebar .dropdown").find('a').click(function(e){
    e.preventDefault();
    $(this).parent().find(".dp-content").slideToggle();
    $(this).parent().find("a").toggleClass("active");
  }); 
  $(".shop-sidebar .dropdown").find('a').click(function(e){
    e.preventDefault();
    $(this).parent().find(".dp-content").slideToggle();
    $(this).parent().find("a").toggleClass("active");
  }); 
});
$(document).ready(function(){
  $('.silk-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    arrows: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.silk-carousel',
    dots: true,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    infinite: true,
    prevArrow:"<button type='button' class='slick-prev pull-left btn text-dark'><i class='fas fa-angle-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right btn text-dark'><i class='fas fa-angle-right'></i></button>"
  });
  $('#quick-view').on('shown.bs.modal', function() {
    $('.silk-carousel').slick('setPosition');
  $('.slider-nav').slick('setPosition');
  }); 
  $('#buy-btn').on('shown.bs.modal', function() {
    $('.silk-carousel').slick('setPosition');
  $('.slider-nav').slick('setPosition');
  }); 
});

$(document).ready(function(){
  $(".categories-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
        },
        500:{
            items:6,
        },
        600:{
            items:6,
        },
        1000:{
            items:8,
        }
    }
  });
});
$(document).ready(function(){
  $(".recently-owl").owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText: [$('.am-next'),$('.am-prev')],
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
        },
        450:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
  });
});
$(document).ready(function(){
  $(".recommended-owl").owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText: [$('.am-next-2'),$('.am-prev-2')],
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
        },
        450:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
  });
});
     
$(document).ready(function () {
  // Show the first tab and hide the rest
  $(".dec-acc .accordion:first-child a").addClass("active");
  $(".tab-content2").hide();
  $(".tab-content2:first").slideDown();

  // Click function
  $(".dec-acc .accordion a").click(function (e) {
    $(".dec-acc .accordion a").removeClass("active");
    $(this).addClass("active");
    $(".tab-content2").slideUp();
    e.preventDefault();
    
    var activeTab = $(".dec-acc .accordion").find("a.active").attr("href");
    $(activeTab).stop().slideDown();
    return false;
  });
  $(".products .product-col .product .product-details .product-dec").hide();
  $(".products .product-col .product .product-details .buy-btn").addClass("col-12");
  $(".products .product-col .product .product-details .order-now").addClass("col-12");
  $("#product-12").click(function (){
    $(".products .product-col").removeClass("col-12");
    $(".products .product-col").addClass("col-6");
    $(".products .product-col").removeClass("col-md-4");
    $(".products .product-col").addClass("col-md-12");
    $(".products .product-col .product").addClass("d-lg-flex");
    $(".products .product-col .product").addClass("d-md-flex");
    $(".products .product-col .product .p-size-img").addClass("me-md-2");
    $(".products .product-col .product").addClass("justify-content-between");
    $(".products .product-col .product .product-details .product-dec").fadeIn();
    $(".products .product-col .product .product-details .buy-now").addClass("res-btn");
    $(".products .product-col .product .product-details .product-name").removeClass("justify-content-center");
    $(".products .product-col .product .product-details .product-name").addClass("justify-content-start");
    $(".products .product-col .product .product-details .price").removeClass("justify-content-center");
    $(".products .product-col .product .product-details .price").addClass("justify-content-start");
    $(".products .product-col .product .product-details .price").addClass("ps-md-2");
    
  });
  $("#product-3").click(function (){
    $(".products .product-col").removeClass("col-6");
    $(".products .product-col").addClass("col-12");
    $(".products .product-col").addClass("col-md-4");
    $(".products .product-col").removeClass("col-md-12");
    $(".products .product-col .product").removeClass("d-lg-flex");
    $(".products .product-col .product").removeClass("d-md-flex");
    $(".products .product-col .product .p-size-img").removeClass("me-md-2");
    $(".products .product-col .product").removeClass("justify-content-between");
    $(".products .product-col .product .product-details .product-dec").fadeOut();
    $(".products .product-col .product .product-details .buy-now").removeClass("res-btn");
    $(".products .product-col .product .product-details .product-name").removeClass("justify-content-start");
    $(".products .product-col .product .product-details .product-name").addClass("justify-content-center");
    $(".products .product-col .product .product-details .price").removeClass("justify-content-start");
    $(".products .product-col .product .product-details .price").addClass("justify-content-center");
    $(".products .product-col .product .product-details .price").removeClass("ps-md-2");
  });
  
});

$(document).ready(function() {
  $('.carousel-inner').magnificPopup({type:'image'});
});

$(document).ready(function () {
  // Show the first tab and hide the rest
  $(".tab-box .accordion:first-child a").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").slideDown();

  // Click function
  $(".tab-box .accordion a").click(function () {
    $(".tab-box .accordion a").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").slideUp();

    var activeTab = $(".tab-box .accordion").find("a.active").attr("href");
    $(activeTab).slideDown();
    return false;
  });
});
$(document).ready(function(){
  $(".checkout-product-details").click(function(){
    $(".checkout-product-price").stop().slideToggle();
  })
})
$(document).scroll(function(){

  var scroll_pos = $(window).scrollTop()
if(scroll_pos > 200){
  $("#scroll-top").fadeIn("medium");
  $("#navbar").slideDown("medium");
  $("#scroll-top").on("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

}else{
$("#scroll-top").fadeOut("medium");
$("#navbar").slideUp("medium");
}
});


Fancybox.getInstance().getSlide().Panzoom.toggleZoom();
                            Fancybox.bind("[data-fancybox]", {
                                Panzoom: {
                                    zoomFriction: 0.7,
                                    maxScale: function () {
                                      return 5;
                                    },
                                  },
                              });
const myModal = new bootstrap.Modal(document.getElementById('quick-view'), options)
