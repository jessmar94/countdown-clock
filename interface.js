$(document).ready(function() {

  let clock = new Clock()

  let deadline = "December 25 2020";
  getCurrentDateTime();
  getCountdown();

  function getCurrentDateTime() {
    $('#clock').text(clock.getFormattedDate());
  }

  function getCountdown() {
    // $('#countdown').text(clock.getTimeRemaining(deadline));
    $('#countdown').text(clock.initialiseClock(deadline));
    // $('#countdown').attr('class', clock.getTimeRemaining(deadline))
  }
});


// Clock.prototype.initializeClock = function(id, endtime) {
//   var clock = document.getElementById(id);
//   var timeinterval = setInterval(function(){
//     var t = getTimeRemaining(endtime);
//     clock.innerHTML = 'days: ' + t.days + '<br>' +
//                       'hours: '+ t.hours + '<br>' +
//                       'minutes: ' + t.minutes + '<br>' +
//                       'seconds: ' + t.seconds;
//     if(t.total<=0){
//       clearInterval(timeinterval);
//     }
//   },1000);
// }
