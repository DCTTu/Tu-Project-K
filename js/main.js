showNavbar = () => {
  $(".navbar--drop").on("click", function () {
    $(".navbar a:gt(0)").toggle();
  });
}

showAddressDetails = () => {
  $(".address__details__header").on("click", function () {
      $(".address__details__body").toggle();
  });
} 

showIndexSideBar = () => {
  $(".index__dropbtn").on("click", function () {
    $(".index__side").toggle();
  });
}

addSticky = () => {
  $(document).ready(function () {
    $(window).scroll(function () { 
      // console.log($(window).scrollTop());
      if ($(window).scrollTop() > 67) {
        $(".navbar").addClass("navbar__sticky");
      } else {
        $(".navbar").removeClass("navbar__sticky");
      }
      let headerHeight = $(".header").outerHeight();
      let bannerHeight = $(".index__banner").outerHeight();
      let rowHeight = $(".index__row").outerHeight();
      let height = headerHeight + bannerHeight + rowHeight - 200;
      let width = screen.width;
      if (width > 739) {
        $(".index__side").css("display", "block");
      } 
      else if (width <=739) {
        if (($(window).scrollTop() > 349) && ($(window).scrollTop() < height)) {
          $(".index__dropbtn").addClass("index__dropbtn__fixed");
          $(".index__side").addClass("index__side__fixed");
        } else {
          $(".index__dropbtn").removeClass("index__dropbtn__fixed");
          $(".index__side").removeClass("index__side__fixed");
        }
      }
    });
  });
}

showNavbar();
showAddressDetails();
showIndexSideBar();
addSticky();