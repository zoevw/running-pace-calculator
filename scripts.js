
var calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", calc);

var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);

function calc() {
  var timeHours = parseFloat(document.getElementById("timeHours").value);
  var timeMinutes = parseFloat(document.getElementById("timeMinutes").value);
  var timeSeconds = parseFloat(document.getElementById("timeSeconds").value);
  var distance = parseFloat(document.getElementById("distance").value);
  var paceHours = parseFloat(document.getElementById("paceHours").value);
  var paceMinutes = parseFloat(document.getElementById("paceMinutes").value);
  var paceSeconds = parseFloat(document.getElementById("paceSeconds").value);

  //given time and distance, calculate pace

  if (isNaN(paceHours) && isNaN(paceMinutes) && isNaN(paceSeconds)) {
    var totalMinutes = timeHours * 60 + timeMinutes + timeSeconds / 60;

    if (document.getElementById("metric").value === "Miles") {
      var totalPace = totalMinutes / distance;
    } else {
      var totalPace = totalMinutes / (distance / 1.60934);
    }
    var pacehr = Math.floor(totalPace / 60);
    var pacemin = Math.floor(totalPace - (pacehr * 60));
    var pacesec = Math.round(((totalPace - pacemin) * 60) - (pacehr * 3600));
    document.getElementById("paceHours").value = pacehr;
    document.getElementById("paceMinutes").value = pacemin;
    document.getElementById("paceSeconds").value = pacesec;
  }
  //given time and pace, calculate distance
  if (isNaN(distance)) {
    var totalMinutes = timeHours * 60 + timeMinutes + timeSeconds / 60;
    var totalPace = paceHours * 60 + paceMinutes + paceSeconds / 60;

    if (document.getElementById("metric").value === "Miles") {
      var dist = totalMinutes / totalPace;
      dist = dist.toFixed(2);
    }
    else {
      var dist = totalMinutes / totalPace * 1.60934;
      dist = dist.toFixed(2)
    }
    document.getElementById("distance").value = dist;
  }

  //calculate time given distance and pace

  if(isNaN(timeHours) && isNaN(timeMinutes) && isNaN(timeSeconds)){

    var totalPace = paceHours * 60 + paceMinutes + paceSeconds / 60;
    
    var totaltime = distance*totalPace; 

    var timehr = Math.floor(totaltime / 60);
    var timemin = Math.floor(totaltime - (timehr * 60));
    var timesec = Math.round(((totaltime - timemin) * 60) - (timehr * 3600));
    document.getElementById("timeHours").value = timehr;
    document.getElementById("timeMinutes").value = timemin;
    document.getElementById("timeSeconds").value = timesec;
  }

}

function reset() {
  document.getElementById("timeHours").value = "";
  document.getElementById("timeMinutes").value = "";
  document.getElementById("timeSeconds").value = "";
  document.getElementById("distance").value = "";
  document.getElementById("paceHours").value = "";
  document.getElementById("paceMinutes").value = "";
  document.getElementById("paceSeconds").value = "";
}
