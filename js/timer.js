var currentdate;
window.onload = function () {
	if (!localStorage.getItem("startTime")) {
		localStorage.setItem("startTime", "0");
	}
	if (!localStorage.getItem("stopWatchRunning")) {
		localStorage.setItem("stopWatchRunning", "false");
	}
	registerClock();
	setStopWatch();
}

function registerClock() {
	setInterval(updateClock, 250);
}

function updateClock() {
	setTime();
	setStopWatch();
}

function setTime() {
	currentdate = new Date();
	var datetime = +currentdate.getDate() + "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	document.getElementById("time").innerHTML = datetime + "";
}

function startstop() {
	if (localStorage.getItem("stopWatchRunning") === "false") {
		localStorage.setItem("startTime", new Date());
		localStorage.setItem("stopWatchRunning", "true");
		document.getElementById("startstop").innerHTML = "Stop";
	}
	else {
		localStorage.setItem("stopWatchRunning", "false");
		document.getElementById("startstop").innerHTML = "Start";
	}
}

function setStopWatch() {
	if (localStorage.getItem("stopWatchRunning") === "false") {
		return;
	}
	var duration = new Date(currentdate - Date.parse(localStorage.getItem("startTime")));
	var showDuration = duration.getHours() - 1 + ":" + duration.getMinutes() + ":" + duration.getSeconds();
	document.getElementById("tracker").innerHTML = showDuration;
}