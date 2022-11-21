$(document).ready(function () {
    $("#signin-icon").click(function () {
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
  $(".categories-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: false,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:5,
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
        0:{
            items:1,
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
        0:{
            items:1,
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
  $("#product-12").click(function (){
    $(".products .product-col").addClass("col-12");
    $(".products .product-col").removeClass("col-12");
    $(".products .product-col").removeClass("col-md-4");
    $(".products .product-col .product").addClass("d-lg-flex");
    $(".products .product-col .product").addClass("d-md-flex");
    $(".products .product-col .product").addClass("justify-content-between");
    $(".products .product-col .product .product-details .product-dec").fadeIn();
    $(".products .product-col .product .product-details .buy-now").addClass("res-btn");
    $(".products .product-col .product .product-details .buy-now").removeClass("col-12");
    $(".products .product-col .product .product-details .buy-now").addClass("m-lg-2");
    $(".products .product-col .product .product-details .order-now").addClass("m-lg-2");
    $(".products .product-col .product .product-details .order-now").css("width", '300px');
  });
  $("#product-3").click(function (){
    $(".products .product-col").removeClass("col-12");
    $(".products .product-col").addClass("col-12");
    $(".products .product-col").addClass("col-md-4");
    $(".products .product-col .product").removeClass("d-lg-flex");
    $(".products .product-col .product").removeClass("d-md-flex");
    $(".products .product-col .product").removeClass("justify-content-between");
    $(".products .product-col .product .product-details .product-dec").fadeOut();
    $(".products .product-col .product .product-details .buy-now").removeClass("res-btn");
    $(".products .product-col .product .product-details .buy-now").addClass("col-12");
    $(".products .product-col .product .product-details .buy-now").removeClass("ms-lg-2");
    $(".products .product-col .product .product-details .order-now").removeClass("ms-lg-2");
    $(".products .product-col .product .product-details .order-now").css("width", '100%');
  });
  
});
$(document).ready(function(){
  $('.product-col .product-details').parent().find('.buy-now').click(function(){
    // $(this).parent().find('.order-now').removeClass('active-order');
    $(this).parent().find('.order-now').stop().slideToggle();
  })
  $('.product-col .product-details .order-now .order-close').click(function(){
    // $(this).parent().find('.order-now').removeClass('active-order');
    $('.product-col .product-details').parent().find('.order-now').stop().slideUp();
  })

})

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

const myModal = new bootstrap.Modal(document.getElementById('quick-view'), options)
