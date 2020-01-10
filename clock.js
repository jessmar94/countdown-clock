
var deadline = 'December 25 2020';

function getTimeRemaining(deadline) {
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t/1000) % 60);
  var minutes = Math.floor((t/1000/60) % 60);
  var hours = Math.floor((t/1000*60*60) % 24);
  var days = Math.floor((t/1000*60*60*24));
}
