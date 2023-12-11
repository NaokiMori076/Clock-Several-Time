var $dOut = $('#date'),
$hOut = $('#hours'),
$mOut = $('#minutes'),
$sOut = $('#seconds'),
$ampmOut = $('#ampm');
var months = [
'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

var days = [
'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function update(){
  var date = new Date();
  var shouldBePrevHour = false;
  
  
  // deduct 1 minutes from actual minutes
  var actualMin = parseInt(date.getMinutes());
  if(actualMin >= 1) {
	actualMin = actualMin - 1;
  } else {
	  if(actualMin == 0) {
		  actualMin = 59;
	  }
	  shouldBePrevHour = true;
  }
  var minutes = actualMin < 10 
  ? '0' + actualMin 
  : actualMin;
  
  var hours = date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  
  var ampm = date.getHours() < 12
  ? 'AM'
  : 'PM';
  
  if(shouldBePrevHour) {
	  hours = hours - 1;
	  if(hours == 11) {
		  if(ampm == 'AM') {
			  ampm = 'PM';
		  } else {
			  ampm = 'AM';
		  }
	  }
  }
  
  var seconds = date.getSeconds() < 10 
  ? '0' + date.getSeconds() 
  : date.getSeconds();
  
  var dayOfWeek = days[date.getDay()];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  
  var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
  
  $dOut.text(dateString);
  $hOut.text(hours);
  $mOut.text(minutes);
  $sOut.text(seconds);
  $ampmOut.text(ampm);
} 

update();
window.setInterval(update, 1000);


// Sunrise & Sunset
var sunrise = new Date().sunrise(43.733850, -79.584420);
var sunset = new Date().sunset(43.733850, -79.584420);

//jQuery('.sunrise-btn').text(tConv24((sunrise.toString().match(/\d{2}:\d{2}/g))));
//jQuery('.sunrise-btn').text(tConv24((sunrise.toString().match(/\d{2}:\d{2}/g))));
jQuery('.sunrise-btn').text(tConv24(sunrise.toString().match(/\d{2}:\d{2}/g).toString()));
jQuery('.sunset-btn').text(tConv24(sunset.toString().match(/\d{2}:\d{2}/g).toString()));
jQuery('#maghrib').text(calculateMaghrib(sunset.toString().match(/\d{2}:\d{2}/g).toString()));

function tConv24(time24) {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  //h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " am" : " pm";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

function calculateMaghrib(time24) {
  console.log(time24);
  var ts = time24;
  var H = ts.substr(0, 2);
  var M = ts.substr(3, 4);
  console.log(H);
  console.log(M);
  var m = parseInt(M)+3;//+5;
  var h = (H % 12) || 12;
  if(m >= 60) {
    m = m - 60;//"00";
    h = h+1;
  }
  m = (m < 10)?("0"+m):m  
  //h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " am" : " pm";
  ts = h +":"+ m + ampm;
  return ts;
}

// Today's Date
var date=new Date();

var months=["JAN","FEB","MAR","APR","MAY","JUN","JUL", "AUG","SEP","OCT","NOV","DEC"];
var val=date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear();
jQuery("#printDate").text(val);


function convertTimeTo24 (time12) {
  var time = time12;
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AMPM = time.match(/\s(.*)$/)[1];
  if(AMPM == "PM" && hours<12) hours = hours+12;
  if(AMPM == "AM" && hours==12) hours = hours-12;
  var sHours = hours.toString();
  var sMinutes = minutes.toString();
  if(hours<10) sHours = "0" + sHours;
  if(minutes<10) sMinutes = "0" + sMinutes;
  var timeArray = [];
  timeArray.push(sHours);
  timeArray.push(sMinutes);
  /*return sHours+":"+sMinutes;*/
  return timeArray;
}

function getTimeDifferenceFromCurrentTime(timeArray) {
  var date = new Date();
  var time1 = new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes());
  var time2 = new Date(date.getFullYear(),date.getMonth(),date.getDate(),timeArray[0],timeArray[1]);
  var diff = time1.getTime() - time2.getTime();
  var diffMinutes = (diff/1000)/60;
  return diffMinutes;
}
