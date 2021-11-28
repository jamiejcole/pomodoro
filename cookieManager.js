const numCompleted = document.getElementById("dataText1");
const totalTime = document.getElementById("dataText2");


function getNumCompleted() {
    var numberCompleted = getCookie('complete');
    console.log("num completed:" + numberCompleted)
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    	let c = ca[i];
    	while (c.charAt(0) == ' ') {
    		c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) {
    		return c.substring(name.length, c.length);
    	}
    }
    return "";
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("dataText1").innerHTML = "Pomodoros Completed: " + getCookie('complete');
	document.getElementById("dataText2").innerHTML = "Total Time: " + getCookie('time');
}, false);

function updateContent() {
	document.getElementById("dataText1").innerHTML = "Pomodoros Completed: " + getCookie('complete');
	document.getElementById("dataText2").innerHTML = "Total Time: " + getCookie('time');
}