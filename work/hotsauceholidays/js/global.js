var greenanimate = bodymovin.loadAnimation({
  container: document.getElementById("greenanim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: greenPath
});
var redanimate = bodymovin.loadAnimation({
  container: document.getElementById("redanim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: redPath
});
$("div#greenanim").hover(function() {
  $("div#greenanim svg").show();
});

$("div#greenanim").mouseleave(function() {
  $("div#greenanim svg").hide();
});

$("div#redanim").hover(function() {
  $("div#redanim svg").show();
});

$("div#redanim").mouseleave(function() {
  $("div#redanim svg").hide();
});

window.addEventListener("DOMContentLoaded", function() {
  redanimate.setSpeed("0.2");
  greenanimate.setSpeed("0.2");
});
