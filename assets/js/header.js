let menuToggleBtn = $(".mobile-menu-btn");
let mobileMenu = $(".mobile-menu");
menuToggleBtn.click(function () {
  if (mobileMenu.is(":hidden")) {
    mobileMenu.slideDown(1000);
  } else {
    mobileMenu.slideUp(1000);
  }
});