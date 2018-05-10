

var contenido='';
var Estudiantes;

window.onload=function(){
	
	var btnMostrarNotas = document.getElementById("mostrarNotas");
	var btncalcularNotaPromedio = document.getElementById("calcularNotaPromedio");
	var btnestudianteNotaMayor = document.getElementById("estudianteNotaMayor");
	var btnestudianteNotaMenor = document.getElementById("estudianteNotaMenor");
	var btnGuardarEstudiante =  document.getElementById("guardarEstudiante");

	btnMostrarNotas.addEventListener("click", function(){
		mostrarNotas();
	});

	btncalcularNotaPromedio.addEventListener("click", function(){
		calcularNotaPromedio();
	});

	btnestudianteNotaMayor.addEventListener("click", function(){
		estudianteNotaMayor();
	});

	btnestudianteNotaMenor.addEventListener("click", function(){
		estudianteNotaMenor();
	});

	btnGuardarEstudiante.addEventListener("click", function(){
		guardarEstudiante();
	});

}

function guardarEstudiante() {


	var formulario = document.forms['formEstudiante'];
	var codigo = formulario['codigo'].value;
	var nombre = formulario['nombre'].value;
	var nota = formulario['nota'].value;

	if (contenido == "") {

		contenido='{"estudiantes":[{"código":"'+codigo+'","nombre":"'+nombre+'","Nota":'+nota+'}]}';
	
	} else {

		contenido = contenido.substring(0,contenido.length-2)+',{"código":'+codigo+',"nombre":"'+nombre+'","Nota":'+nota+'}]}';

	}
	
	Estudiantes= JSON.parse(contenido);

	document.getElementById("codigo").value="";
	document.getElementById("nombre").value="";
	document.getElementById("nota").value="";
	
}

function mostrarNotas() {

	var resultadoNotas='Codigo       Nombre        Nota'+'<br>';
	resultadoNotas += recorrerJson(Estudiantes, 'Mostar Notas');
	document.getElementById('resultados').innerHTML = resultadoNotas;

}

function calcularNotaPromedio(){
	alert("El promedio de las notas de los estudiantes es: "+recorrerJson(Estudiantes,'Promedio Notas'));
	//document.getElementById('resultados').innerHTML = "El promedio de las notas de los estudiantes es: "+recorrerJson(Estudiantes,'Promedio Notas');
}

function estudianteNotaMayor(){
	alert("Los datos del(os) estudiante(s) con Mayor Nota: \n"+buscarEstudiantes(recorrerJson(Estudiantes,'Nota Mayor')));
	//document.getElementById('resultados').innerHTML = "Los datos del(os) estudiante(s) con Mayor Nota: <br>"+buscarEstudiantes(recorrerJson(Estudiantes,'Nota Mayor'));
}

function estudianteNotaMenor(){
	alert("Los datos del(os) estudiante(s) con Menor Nota: \n"+buscarEstudiantes(recorrerJson(Estudiantes,'Nota Menor')));	
	//document.getElementById('resultados').innerHTML = "Los datos del(os) estudiante(s) con Menor Nota: <br>"+buscarEstudiantes(recorrerJson(Estudiantes,'Nota Menor'));
}

function recorrerJson(jsonNotas, proceso){

	var salida='';
	var arrayNotas=new Array(jsonNotas.estudiantes.length);

	for (var i = 0; i < jsonNotas.estudiantes.length; i++) {

		if (proceso == 'Mostar Notas') {
			
			salida+=jsonNotas.estudiantes[i]['código']+'       '+jsonNotas.estudiantes[i]['nombre']+'       '+jsonNotas.estudiantes[i]['Nota']+'<br>';
		
		} else if (proceso == 'Nota Mayor'||proceso == 'Nota Menor'||proceso == 'Promedio Notas'){
			
			arrayNotas[i]=jsonNotas.estudiantes[i]['Nota'];

		} 
		else {
			alert('Es necesario validar el procedimiento');
		}
	}

	arrayNotas=arrayNotas.sort();

	if (proceso == 'Nota Mayor') {

		salida= arrayNotas[jsonNotas.estudiantes.length-1];

	} 
	if (proceso == 'Nota Menor') {

		salida= arrayNotas[0];

	}  
	if (proceso == 'Promedio Notas') {

		var suma=0;

		for (var i = 0; i < arrayNotas.length; i++) {
			suma+=arrayNotas[i];
		}

		salida= suma/(jsonNotas.estudiantes.length);

	} 

	return salida;
}

function buscarEstudiantes(Nota){

	var datosEstudiante = "";

	for (var i = 0; i < Estudiantes.estudiantes.length; i++) {

		if(Estudiantes.estudiantes[i]['Nota']==Nota)

			datosEstudiante+=' - '+Estudiantes.estudiantes[i]['código']+'       '+Estudiantes.estudiantes[i]['nombre']+'       '+Estudiantes.estudiantes[i]['Nota']+'\n';
		
		
	}

	return datosEstudiante
}