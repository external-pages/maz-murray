$(document).ready(function() {

	$('textarea').each(function() {
		$(this).height($(this).prop('scrollHeight'));
	});

	$(".zero").show();
	
	$(".one").hide();
	$("#nextButton1").click(function() {
		$(".one").toggle();
	});

	$(".two").hide();
	$("#nextButton2").click(function() {
		$(".two").toggle();
	});

	$(".three").hide();
	$("#nextButton3").click(function() {
		$(".three").toggle();
	});

	$(".four").hide();
	$("#nextButton4").click(function() {
		$(".four").toggle();
	});

	$(".five").hide();
	$("#nextButton5").click(function() {
		$(".five").toggle();
	});

	$(".six").hide();
	$("#nextButton6").click(function() {
		$(".six").toggle();
	});

	$(".seven").hide();
	$("#nextButton7").click(function() {
		$(".seven").toggle();
	});

	$(".eight").hide();
	$("#nextButton8").click(function() {
		$(".eight").toggle();
	});

});

// window.onload = function() {
// 	// Video
// 	var video = document.getElementById("video");
// 	// Buttons
// 	var playButton = document.getElementById("play-pause");

// 	playButton.addEventListener("click", function() {
// 	  	if (video.paused == true) {
// 		    // Play the video
// 		    video.play();
// 		    // Update the button text to 'Pause'
// 		    playButton.innerHTML = "Pause";
// 		  } else {
// 		    // Pause the video
// 		    video.pause();
// 	    // Update the button text to 'Play'
// 	    playButton.innerHTML = "Play";
// 	  	}
// 	});
// }