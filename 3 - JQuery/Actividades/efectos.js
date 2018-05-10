$(document).ready(function() {
	
	$("#hide").click(function() {
		$("#parrafo").hide();
	});

	$("#show").click(function(){

		$("#parrafo").show(500, function(){
			alert("El parrafo ya no esta oculto");
		});
	});

	$("#animate").click(function(){

		$("#caja").animate({"left":"+=50px","width":"+=5px"});

	});

	$("#start").click(function(){

		$("#caja2").animate({"width":"2000px"},10000);

	});

	$("#stop").click(function(){

		$("#caja2").stop();

	});

});