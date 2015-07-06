var  min = $(".minHand");
var  hr = $(".hourHand");
var  sec = $(".secondHand");

var currentTime = new Date($.now());
var secsInitDegrees = ((360/60)* getsecs());
var hrInitDegrees = ((360/12)* getHours());
var minsInitDegrees = ((360/60)* getmins());

hr.css({
	'-webkit-transform': 'rotate(' + hrInitDegrees + 'deg)',
	'-ms-transform': 'rotate(' + hrInitDegrees + 'deg)' 
});
min.css ({
	'-webkit-transform': 'rotate(' + minsInitDegrees + 'deg)',
	'-ms-transform': 'rotate(' + minsInitDegrees + 'deg)'
});
sec.css ({
	'-webkit-transform': 'rotate(' + secsInitDegrees + 'deg)',
	'-ms-transform':'rotate(' + secsInitDegrees + 'deg)'
});


var minsCounter = 0;
setInterval(function(){
	secsInitDegrees = rotate( sec, (360/60), secsInitDegrees );
}, 1000);
	
setInterval(function(){
	minsInitDegrees = rotate( min, (360/(60)), minsInitDegrees );
},  60 * 1000);
	
setInterval(function(){
	hrInitDegrees = rotate( hr, (360/12), hrInitDegrees );
}, 60 * 60 * 1000);

function getHours () {
	var hours = currentTime.getHours();

	if (hours > 12) {
	 	var hours = ((currentTime.getHours()) - 12);
		}

	return hours
}
function getmins () {
	var mins = currentTime.getMinutes();
	return mins
}
function getsecs () {
	var secs = currentTime.getSeconds();
	return secs
}


//NEW FUNCTION 
function rotate (obj,increments,startPosition){	
	obj.css({'-webkit-transform' : 'rotate(' + (startPosition + increments) + 'deg)'});
	return startPosition + increments;
}