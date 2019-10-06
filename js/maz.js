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

});