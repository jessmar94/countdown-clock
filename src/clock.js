
function Clock() {
  this.now = new Date()
  this.countdown = {}
}

Clock.prototype.getFormattedDate = function() {
  let current_datetime = new Date()
  let formatted_date = current_datetime.getDate() + " / " + (current_datetime.getMonth() + 1) + " / " + current_datetime.getFullYear()
  return formatted_date
}

Clock.prototype.getTimeNow = function() {
  this.now = Date.parse(this.now);
  return this.now
}

Clock.prototype.getTimeRemaining = function(deadline) {
    let t = Date.parse(deadline) - this.now;
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    this.countdown =  days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    return this.countdown
  }

  // return {
  //   'total': t,
  //   'days': days,
  //   'hours': hours,
  //   'minutes': minutes,
  //   'seconds': seconds
  // };


Clock.prototype.initialiseClock = function(deadline) {
  let timeinterval = setInterval(function() {
    let t = Clock.prototype.getTimeRemaining(deadline);
    return t;
    if (t.total <= 0) {
      clearInterval(timeinterval);
      console.log("Expired")
    }
  }, 1000);
}


// var deadline = new Date("Dec 25, 2020 15:37:25").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("demo").innerHTML = days + "d "
// + hours + "h " + minutes + "m " + seconds + "s ";
//     if (t < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
  module.exports = Clock;
}
