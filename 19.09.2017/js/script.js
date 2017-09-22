
$.fn.backtotop = function (options) {
  var self = this;
  var settings = $.extend({
      // These are the defaults.
      content: "top",
      bottom: "50px",
      left: false,
      right: "15px",
      scrollTop: 200
  }, options);

  var elem = $("<a href='#'>" + settings.content + "</a>");
  elem.addClass("backtotop").css("bottom", settings.bottom).css("display", "none");

  if (settings.left == false) {
      elem.css("right", settings.right);
  } else {
      elem.css("left", settings.left);
  }

  $(self).append(elem);

  $(window).scroll(function () {
      if ($(this).scrollTop() >= settings.scrollTop) {
          elem.fadeIn("slow");
      } else {
          elem.fadeOut();
      }
  });

  elem.click(function (ev) {
      ev.preventDefault();
      $("html body").animate({
          scrollTop: 0
      }, "slow");
  });

}
$.fn.getArea = function () {
  var self = this;
  self.area = $(this).width() * $(this).height();
  self.click = true;
  $(this).click(function () {
      if (self.click) {
          $(this).append("<span class='area'>" + self.area + "</span>");
          self.click = false;
      } else {
          $(".area").remove();
          self.click = true;
      }

  })
}
$(document).ready(function () {

  $("body").backtotop({
      bottom: "15px",
      content: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
  });

  $(".header").getArea();

  $("#dropdownMenuLink").mouseover(function(){
    $(".dropdown-menu").addClass("showClass");
  })
  $("#dropdownMenuLink").mouseout(function(){
    $(".dropdown-menu").removeClass("showClass");
   })
  
});
