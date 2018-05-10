$.validator.setDefaults({

	submitHandler: function(){
		alert("Inicio de sesion exitoso");
		$("#usuario").val("");
		$("#password").val("");
	}

});

$(document).ready(function(){
	var validator= $("#miForm").validate({
		errorPlacement: function(error,element){
			$(element).closest("form")
			.find("label[for='"+element.attr("id")+"']")
			.append(error);
		},
		errorElement: "span",
		messages:{
			usuario:{
				required:"(Por favor ingrese su nombre de usuario)",
				minlength:"(Debe tener mínimo 3 caracteres)"
			},
			password:{
				required:"(Porfavor ingrese su contraseña)",
				minlength:"(Debe tener entre 5 y 12 caracteres)",
				maxlength:"(Debe tener entre 5 y 12 caracteres)"
			}
		}

	});

});