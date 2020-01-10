$(document).ready(function() {

  var clock = new Clock()
  getCurrentDateTime()

  function getCurrentDateTime() {
    $('#clock').text(clock.now);
    $("#clock").attr('class', clock.getTimeNow())
  }

});
