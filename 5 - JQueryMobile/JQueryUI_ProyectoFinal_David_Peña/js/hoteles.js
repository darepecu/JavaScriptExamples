function cambiarPagina(page) {
    $.mobile.changePage("#" + page, {
        transition: "none"
    });
}

var hoteles_array=[];

$(document).ready(function() {

    var marcadores = [];
    var marcadorRegistro;
    var puntos = [];
    var mapaRegistro;
    var latlngInicial = new google.maps.LatLng(25.760527, -80.192800); 
    var latitudPunto;
    var longitudPunto;

    function Hotel(nombre, ciudad, telefono, estrellas, latitudPunto_input, longitudPunto_input) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.estrellas = estrellas;
        this.latitudPunto = latitudPunto_input;
        this.longitudPunto = longitudPunto_input;
    }
   

    $("#RegistrarHotel").click(function() {

        cambiarPagina("RegistroHoteles");
        mostrarMapaRegistro();

        $("#GuardarHotel").click(function() {

            var nombreHotel = $("#nombreHotel").val();
            var ciudad = $("#ciudad").val();
            var telefono = $("#telefono").val();
            var estrellas = $("#estrellas").val();

            if ((nombreHotel!="")&&(ciudad!="")&&(telefono!="")&&(estrellas!="")) {
                hoteles_array.push(new Hotel(nombreHotel, ciudad, telefono, estrellas, latitudPunto, longitudPunto));
            }
            limpiarCampos();
            cambiarPagina("home");
        });
    });

    $("#btnListarHoteles").click(function() {

        cambiarPagina("ListaHoteles");

        var listabtn="";

        for (var i = 0; i < hoteles_array.length; i++) {
            
            listabtn+= '<a align="center" class="ui-btn" id="'+i+'"">'+hoteles_array[i].nombre+'</a>';

        }
        $("#ListaBotonesHoteles").html(listabtn);

        for (var i = 0; i < hoteles_array.length; i++) {
            
            var dataHotelSeleccionado = "";
            $("#"+i).click(function() {

                cambiarPagina("DatosHotel");

                dataHotelSeleccionado = "Nombre: "+hoteles_array[this.id]["nombre"] + "<br>";
                dataHotelSeleccionado += "Ciudad: "+hoteles_array[this.id]["ciudad"] + "<br>";
                dataHotelSeleccionado += "Telefono: "+hoteles_array[this.id]["telefono"] + "<br>";
                dataHotelSeleccionado += "Estrellas: "+hoteles_array[this.id]["estrellas"] + "<br>";

                $("#DatosHoteles").html(dataHotelSeleccionado);

                mostrarMapaDetalleHotel(hoteles_array[this.id]["latitudPunto"], hoteles_array[this.id]["longitudPunto"]);
             });
        }

    });

    function limpiarCampos(){
        $("#nombreHotel").val("");
        $("#ciudad").val("");
        $("#telefono").val("");
        $("#estrellas").val("");
    }

    function mostrarMapaRegistro() {
        
        var opciones = {            
            zoom: 10,
            center: latlngInicial,
            mapTypeId: google.maps.MapTypeId.ROADMAP        
        };

         mapaRegistro = new google.maps.Map(document.getElementById("divMapaRegistro"), opciones);   

         marcadorRegistro = new google.maps.Marker({            
            position: latlngInicial,
            map: mapaRegistro,
            draggable: true,
            title: "Mi punto!!"        
        });

        google.maps.event.addListener(marcadorRegistro, 'dragend', function(event) {
            latitudPunto = event.latLng.lat();
            longitudPunto = event.latLng.lng();
        });    
    }

    function mostrarMapaDetalleHotel(latitud, longitud) {

        var opciones = {            
            zoom: 3,
            center: latlngInicial,
            mapTypeId: google.maps.MapTypeId.ROADMAP        
        };

                
        var mapa = new google.maps.Map(document.getElementById("divMapaDetalleHotel"), opciones);    

            var latlngnN = new google.maps.LatLng(latitud, longitud );
            var marcador = new google.maps.Marker({            
                position: latlngnN,
                map: mapa,
                title: "UBICACION HOTEL"        
            }); 
     
    }
    

}); 