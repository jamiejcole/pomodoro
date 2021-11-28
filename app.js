const timerText = document.getElementById("timerText");
var ringtone = new Audio('ringtone.mp3');

var length = 0;
var currentTimeMinutes = 25;
var currentTimeSecs = 0;
var running = false;
var isCustomising = false;

function setTime(time) {
	try { 
		var timeInt = parseInt(time)
		if (running == false) {
			length = timeInt;
			document.getElementById("timerText").innerHTML = time + ":00";
		}
		if (isCustomising == true) { customTime(); }
	}
	catch (error) { console.error(error); }
	
}

function customTime() {
	if (isCustomising == false && running == false) {
		document.getElementById("timerText").style.display = "none";
		document.getElementById("timerInput").style.display = "inline-block";
		document.getElementById("timerInput").focus();
		document.getElementById("buttonHolder").style.paddingTop = "58px";
		document.getElementById("buttonHolder").style.marginTop = "-30px";
		length = 0;
		document.getElementById("timerText").innerHTML = "00:00";
		isCustomising = true;
	}
	else if (isCustomising == true && running == false) {
		document.getElementById("timerText").style.display = "block";
		document.getElementById("timerInput").style.display = "none";
		document.getElementById("buttonHolder").style.paddingTop = "0px";
		document.getElementById("buttonHolder").style.marginTop = "-30px";
		isCustomising = false;
	}
}


function runTimer() {
	if (isCustomising == true) {
		const inpVal = document.getElementById('timerInput').value;
		customTime();
		setTime(inpVal);
	}

	if (running == false && length != 0) {
		document.getElementById("timerText").innerHTML = length - 1 + ":59";
		running = true;
		var countDownDate = new Date();
		countDownDate.setMinutes(countDownDate.getMinutes() + length)

		// Update the count down every 1 second
		var x = setInterval(function() {

			// Get today's date and time
			var now = new Date().getTime();

			// Find the distance between now and the count down date
			var distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// Display the result in the element with id="demo"
			secondLength = seconds.toString().length;
			if (secondLength >= 2) {
				document.getElementById("timerText").innerHTML = minutes + ":" + seconds;
			}
			else if (secondLength == 1) {
				document.getElementById("timerText").innerHTML = minutes + ":0" + seconds;
			}
			document.title = "Pomodoro | " + minutes + ":" + seconds;

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("timerText").innerHTML = "DONE!";
				ringtone.play();
			}
		}, 1000);
	}
}