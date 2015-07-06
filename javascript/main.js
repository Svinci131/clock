var  min = $(".minHand");
var  hr = $(".hourHand");
var  sec = $(".secondHand");


	var degrees = 0;
	var minDegrees = 0;
	var hrDegrees = 0;

	var t = setInterval(function(){
		rotate2($(sec));
	}
	, 1000);
	
	setInterval(function(){
	
		rotate($(min));
	}
	,  60 * 1000);
	
	
	
	setInterval(function(){
		rotate3($(hr));
	}
	, 60 * 60 * 1000);
	var i = 1;
	function rotate2(obj){
		degrees+=(360/60);
		obj.css({'-webkit-transform' : 'rotate(' + degrees + 'deg)'});
		// console.log(degrees);
		}
		
		
	function rotate(obj){
		minDegrees+=(360/(60*60));
		obj.css({'-webkit-transform' : 'rotate(' + (-1*degrees) + 'deg)'});
		// console.log(degrees);
		}
		
	function rotate3(obj){
		degrees+=(360/(60*60*60));
	 	obj.css({'-webkit-transform' : 'rotate(' + degrees + 'deg)'});
	 	console.log(degrees);
	 }