$(document).ready(function() {

  let clock = new Clock()

  let deadline = "December 25 2020";
  getCurrentDateTime();

  function getCurrentDateTime() {
    $('#clock').text(clock.getFormattedDate());
  }
})
