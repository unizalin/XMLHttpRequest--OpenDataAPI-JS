$(document).ready(function () {
  $('#goTop').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 3000);
  });
});