
$(document).ready(function(){
		
	var contador;

	if (localStorage.length>0) {
		contador = localStorage.length+1;
	} else {
		contador = 1;
	}
	$("#codigo").val(contador);

	$("#guardarEstudiante").click(function(){
		var codigo = $("#codigo").val();
		var nombre = $("#nombre").val();
		var nota = $("#nota").val()	;

		var estudiante ={

			codigo:codigo,
			nombre:nombre,
			nota:nota
		};
		localStorage.setItem(codigo,JSON.stringify(estudiante));

		contador = localStorage.length +1;

		listarEstudiantes();
		restablecer();
	});

	listarEstudiantes();



	$("#calcularNotaPromedio").click(function() {
		alert("El promedio de las notas de los estudiantes es: "+recorrerJson('Promedio Notas'));
		
	});

	$("#estudianteNotaMayor").click(function() {
		alert("Los datos del(os) estudiante(s) con Mayor Nota: \n"+buscarEstudiantes(recorrerJson('Nota Mayor')));
		
	});

	$("#estudianteNotaMenor").click(function() {
		alert("Los datos del(os) estudiante(s) con Menor Nota: \n"+buscarEstudiantes(recorrerJson('Nota Menor')));	
		
	});

});

function restablecer() {
	$("#codigo").val(localStorage.length+1);
	$("#nombre").val("");
	$("#nota").val("");
}

function editarEstudiante(id){
	var Estudiante; 
	for (var i = 0; i < localStorage.length; i++) {
		var estudianteLocalStorage = localStorage.key(i);
		Estudiante = $.parseJSON(localStorage.getItem(estudianteLocalStorage));

		if (Estudiante.codigo == id) {
			
			$('#codigo').val(Estudiante.codigo);
			$('#nombre').val(Estudiante.nombre);
			$('#nota').val(Estudiante.nota);

		}
	}
};

function listarEstudiantes(){
	var tabla="";

	tabla += '<table border="1">';
	tabla += '<tr>';
	tabla += '<th>CODIGO</th>';
	tabla += '<th>NOMBRE ESTUDIANTE</th>';
	tabla += '<th>NOTA</th>';
	tabla += '<th>EDITAR</th>';
	tabla += '<th>ELIMINAR</th>';
	tabla += '</tr>';

	for (var i=0; i<localStorage.length;i++){

		var estudianteLocalStorage = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(estudianteLocalStorage));

		tabla += '<tr>';
		tabla += '<td>'+estudiante.codigo+'</td>';
		tabla += '<td>'+estudiante.nombre+'</td>';
		tabla += '<td>'+estudiante.nota+'</td>';
		tabla += '<td><button onclick="editarEstudiante(\''+estudiante.codigo+'\');">Editar</button></td>';
		tabla += '<td><button onclick="eliminarEstudiante(\''+estudiante.codigo+'\');">Eliminar</button></td>';
		tabla += '</tr>';

	}
	tabla +='</table>';
	$("#resultados").html(tabla);
};

function eliminarEstudiante(id){

	localStorage.removeItem(id);
	listarEstudiantes();

};


function recorrerJson(proceso){

	var salida='';

	var arrayNotas=new Array(localStorage.length);

	for (var i = 0; i < localStorage.length; i++) {

		var estudianteLocalStorage = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(estudianteLocalStorage));

	 	if (proceso == 'Nota Mayor'||proceso == 'Nota Menor'||proceso == 'Promedio Notas'){
			
			arrayNotas[i]=parseFloat(estudiante.nota);

		} 
		else {
			alert('Es necesario validar el procedimiento');
		}
	}
	arrayNotas=arrayNotas.sort();

	if (proceso == 'Nota Mayor') {

		salida= arrayNotas[arrayNotas.length-1];

	} 
	if (proceso == 'Nota Menor') {

		salida= arrayNotas[0];

	}  
	if (proceso == 'Promedio Notas') {

		var suma=0;

		for (var i = 0; i < arrayNotas.length; i++) {
			suma+=arrayNotas[i];
		}

		salida= suma/(arrayNotas.length);

	} 

	return salida;
}

function buscarEstudiantes(Nota){

	var datosEstudiante = "";

	for (var i = 0; i < localStorage.length; i++) {

		var estudianteLocalStorage = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(estudianteLocalStorage));

		if(estudiante.nota==Nota)

			datosEstudiante+=' - '+estudiante.codigo+'       '+estudiante.nombre+'       '+estudiante.nota+'\n';
		
		
	}

	return datosEstudiante
}
