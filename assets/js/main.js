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

    $(".icon-search").click(function () {
      $(".search-zoom").slideDown();
      $("#overlay-search").fadeIn("fast");
    });
    $("#overlay-search, .search-dismiss").click(function () {
      $(".search-zoom").slideUp();
      $("#overlay-search").fadeOut("fast");
    });

    
});
$(window).scroll(function(event){
    var scroll_pos = $(window).scrollTop()
    if(scroll_pos > 100){
        $(".navbar").css("position", "fixed");
        $(".navbar").slideDown();
    
    }else{
      $(".navbar").css("position", "relative");
    }
});

