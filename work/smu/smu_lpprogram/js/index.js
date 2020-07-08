var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var icon = this;
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.toggle("minusicon");
      icon.classList.toggle("plusicon");
    } else {
      content.style.display = "block";
      icon.classList.toggle("minusicon");
      icon.classList.toggle("plusicon");
    }
  });
}
// Trying to get form to hide label on click
$(document).click(function() {
  $('input').each(function() {
    var label = $("label[for='" + $(this).attr('id') + "']");
    $(this).removeClass('active');
    label.show();
  })
})
$('input').focus (function() {
  $(this).addClass('active');
  var dis = $(this);
  var label = $("label[for='" + $(this).attr('id') + "']");
  $(this).prev('label').hide();
})