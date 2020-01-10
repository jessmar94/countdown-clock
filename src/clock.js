
// var deadline = 'December 25 2020';
function Clock() {
  this.now = new Date()
}

Clock.prototype.getTimeNow = function() {
  this.now = Date.parse(this.now);
  return this.now
}

Clock.prototype.getTimeRemaining = function(deadline) {
  var t = Date.parse(deadline) - this.now;
  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/1000*60*60) % 24);
  var days = Math.floor((t/1000*60*60*24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

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

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Clock;
}
