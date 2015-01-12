var Time;
var timeArr = new Array();
var liArr = new Array();

addEventListener('DOMContentLoaded',function(){
    for (var j = 0; j < 6; j++) {
        liArr[j] = document.getElementById('time'+j);
    }
    setInterval("saveTime()", 1000);
});

function saveTime(){
    Time = new Date();
        timeArr[0] = Time.getSeconds()%10;
        timeArr[1] = parseInt(Time.getSeconds()/10);
        timeArr[2] = Time.getMinutes()%10;
        timeArr[3] = parseInt(Time.getMinutes()/10);
        timeArr[4] = Time.getHours()%10;
        timeArr[5] = parseInt(Time.getHours()/10);
    updateTime();
    setTimeout("clrTime()", 500);
    }

function updateTime() {
    for ( var i = 0; i < timeArr.length; i++) {
        if (timeArr[i] != liArr[i].innerText) {
             liArr[i].classList.add('rotate');
			 liArr[i].innerText = timeArr[i];
        }
    }
}

function clrTime() {
    for ( var i = 0; i < timeArr.length; i++) {
        liArr[i].classList.remove('rotate');
    }
}
