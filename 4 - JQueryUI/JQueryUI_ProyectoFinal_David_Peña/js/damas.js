$(document).ready(function(){

	var identificador= true;

	for (var j = 0; j < 9; j++) {
		
		for (var i = 0; i < 8; i++) {
			
			if (identificador) {
				$('#tablero').append("<div id='div-black-"+i+"-"+j+"' class='div-black'></div>");
				identificador= false;
			} else {
				$('#tablero').append("<div id='div-white-"+i+"-"+j+"' class='div-white'></div>");
				identificador= true;
			}
		}
		if (identificador) {
			identificador= false;
		} else {
			identificador= true;
		}
		$('#tablero').append("<br>");
	}
	
});