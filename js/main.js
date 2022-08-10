$(function () {
  var x = document.getElementById("myAudio");
  $('.btn').click(function () {
    $('.body').hasClass('open') ? $('.body').removeClass('open') : $('.body').addClass('open');
    x.play();
    $('.loichuc').hasClass('show') ? $('.loichuc').removeClass('show') : $('.loichuc').addClass('show');
  })
})
