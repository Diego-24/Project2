/*the $ is a function call*/
$(".nav-btn").click(function(){
      $("#sidebar").toggleClass("active");
      $("#content").toggleClass("active");
      $(".nav-btn").toggleClass("active");
});