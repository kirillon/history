let flag = 0
let clicked = false
let locked = false

$(document).ready(function(){
	

        setTimeout(unlock, 1000000);
		$("#burgernav").click(function(){
			if (!locked) {
        	locked = true;
        	setTimeout(unlock, 300);
			if (flag == 0){
				$(".menu").css("left", "+=1000");
				$(".line1").css("transform","rotate(45deg) translate(15px, 13px)");
				$(".line2").css("transform","scale(0)");
				$(".line3").css("transform","rotate(-45deg) translate(15px, -13px)");
				
				flag = 1;
			}
			else{
				$(".menu").css("left", "-=1000");
				$(".line1").css("transform","rotate(0deg) translate(0px, 0px)");
				$(".line2").css("transform","scale(1)");
				$(".line3").css("transform","rotate(0deg) translate(0px, 0px)");
				flag = 0;
		
			}

	}})	
	})
function unlock () {
    locked = false;
}