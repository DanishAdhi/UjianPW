// sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// digital clock

// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time 
    let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "PM";

	
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";;
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
		
	}

	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		sec +
		am_pm;

	// Displaying the time
	document.getElementById(
		"clock"
	).innerHTML = currentTime;
}

showTime();

// section counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
