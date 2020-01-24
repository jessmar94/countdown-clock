function Timer() {

  let deadline = new Date("25 December 2020 0:00:00 GMT")
			deadline = (Date.parse(deadline) / 1000);

			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = deadline - now;

			let days = Math.floor(timeLeft / 86400);
			let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");

	}

	setInterval(function() { Timer(); }, 1000);

  if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = Timer;
  }
