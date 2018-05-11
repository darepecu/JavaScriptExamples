$(document).ready(function() {
	var eventos = "";
	$("#productos").selectable({
		selected: function(event,ui){
			var seleccionados = $("li[class$='ui-selected']").length;
			$("#itemSelects").html("has seleccionado "+ seleccionados + " productos"),
			$("#mensaje").html(eventos += "Evento selected!!!!!<br>");
		},
		unselected: function(event,ui){
			$("#eventos").html(eventos += "Evento unselected!!!!<br>");
		},
		start: function(event,ui){
			$("#eventos").html(eventos += "Evento start!!!!<br>");
		},
		stop: function(event,ui){
			$("#eventos").html(eventos += "Evento stop!!!!<br>");
		}
	});

});