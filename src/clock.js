
// var deadline = 'December 25 2020';
function Clock() {
  this.now = 0
}

Clock.prototype.getTimeNow = function() {
  this.roll = Date.parse(new Date());
  return this.roll
}

Clock.prototype.getTimeRemaining = function(deadline) {
  var t = Date.parse(deadline) - this.roll;
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

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Clock;
}
