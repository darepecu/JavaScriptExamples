$(document).ready(function(){

	var tableroCargado= false;
	var JuegoIniciado= false;

	$('#cargartablero').click(function(){

		if (tableroCargado==false) {
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
				tableroCargado=true;
			}
		} else {
			alert("Ya esta cargado el Tablero !!!");
		}
	});

	$('#iniciarJuego').click(function(){

		var contadorRojo=0;
		var contadorAzul=0;

		if ((JuegoIniciado==false)&&(tableroCargado==true) ) {

			for (var j = 0; j < 9; j++) {
				for (var i = 0; i < 8; i++) {
					if(j<3){
						$('#div-white-'+i+"-"+j).append("<div id='ficha-roja-"+contadorRojo+"' class='fichaRoja'></div>")
						contadorRojo++;
					}
					if (j>5) {
						$('#div-white-'+i+"-"+j).append("<div id='ficha-azul-"+contadorAzul+"' class='fichaAzul'></div>")
						contadorAzul++;
					}
				}
			}

			JuegoIniciado=true;
		}else{
			alert("Hay un juego iniciado o no has gargado el tablero, si deseas iniciar otro actualiza la pagina !!!");
		}

		$("#turno").addClass('turnoRojo');

		$(".fichaRoja").draggable();

		$(".fichaRoja").on("dragstop",function(evento,ui){
			$("#turno").switchClass( "turnoRojo", "turnoAzul", 1000, "easeInOutQuad" );
		});

		$(".fichaAzul").draggable();

		$(".fichaAzul").on("dragstop",function(evento,ui){
			$("#turno").switchClass( "turnoAzul", "turnoRojo", 1000, "easeInOutQuad" );
		});


	});


	

});