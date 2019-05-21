
var class_productos = ['.interior','.exterior'];
var btns_productos = ['#btn_todos','#btn_interior','#btn_exterior'];

jQuery(document).ready(function($) {
	$("#btn_todos").on('click', function(event) {
		event.preventDefault();
		show_and_hide();
		add_and_remove_class('#btn_todos');
		acomodar_elementos("");
		return false;
	});			

	$("#btn_interior").on('click', function(event) {
		event.preventDefault();
		var elemento = '.interior';
		show_and_hide(elemento);
		add_and_remove_class('#btn_interior');
		acomodar_elementos('interior');
		return false;
	});

	$("#btn_exterior").on('click', function(event) {
		event.preventDefault();
		var elemento = '.exterior';
		show_and_hide(elemento);
		add_and_remove_class('#btn_exterior');
		acomodar_elementos("exterior");
		return false;
	});

	$('.wh-icon-whatshelp').on('click',function(event) {
		event.preventDefault();
		$('. wh-widget-send-button-get-button').addClass('d-none');
	});


	$('#formularioContacto').on('submit', function(event) {
        event.preventDefault();
        var nombre = $('#contacto_nombre').val();
        var email = $('#contacto_email').val();
        var tel = $('#contacto_telefono').val();
        var msj = $('#contacto_mensaje').val();
        var body = 'Nombre: '+nombre+'<br>Mail: '+email+'<br>Teléfono: '+tel+'<br>Mensaje: '+msj;
        $('#contacto_enviar').text('Enviando...');
        $('#contacto_enviar').attr('disabled', 'disabled');
        Email.send({
            Host : "industrialuminica.com.ar",
            Username : "",
            Password : "",
            To : 'contacto@industrialuminica.com.ar',
            From : 'consultas@industrialuminica.com.ar',
            Subject : "Consulta de formulario",
            Body : body
        }).then(function () {
            $('#contacto_enviar').text('Enviar');
            $('#contacto_enviar').removeAttr('disabled');
            swal("Enviado!","Te responderemos a la brevedad","success");
            $('#formularioContacto').trigger("reset");

        }, function () {
            $('#contacto_enviar').text('Enviar');
            $('#contacto_enviar').removeAttr('disabled');
            swal("Error!","No se ha podida enviar el mensaje","error");
            $('#formularioContacto').trigger("reset");
        })

        // .then(function () {
        //     $('#btnEnviar').text('Enviado');
            
        // }); 
        return false;
    });

});


function show_and_hide(elemento='all') {
	class_productos.forEach( function(value,index,array) {
    	if(value===elemento || elemento==='all'){
    		$(value).show('slow');
    	}else{
    		$(value).hide('slow');
    	}
	});
}

function add_and_remove_class(claseactivar) {
	btns_productos.forEach(function (value,index,array) {
		if (claseactivar===value) {
			$(value).addClass('active');
		}else{
			if ($(value).hasClass('active')) {
				$(value).removeClass('active')
			}
		}
	})
}

function acomodar_elementos(categoria) {
	$(".producto"+categoria).each(function( index ) {
		// impar -> la foto va a la izquierda
  		if(index%2){
  			if (!$(this).hasClass('order-lg-first')) {
  				$(this).addClass('order-lg-first');
  			}
  		}
  		// par -> la foto va a la derecha
  		else{
  			if ($(this).hasClass('order-lg-first')) {
  				$(this).removeClass('order-lg-first');
  			}	
  		}	
	});
}
