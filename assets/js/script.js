$(".about-btn").click(function() {
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 750);
});

$(".resume-btn").click(function() {
  window.location.href = "assets/resume.pdf";
});

$(".projects-btn").click(function() {
  $("html, body").animate({
    scrollTop: $("#projects").offset().top
  }, 750);
});
