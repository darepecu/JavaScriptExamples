$(document).ready(function(){

	$("#arrastrar").draggable();
	$("#soltar").droppable({
		drop: mensaje
	});

	function mensaje() {
		alert("Has soltado el elemento en la caja!!");
	};

});