var boton = document.getElementById("btnmenu");
var menu =document.getElementById("menu");
boton.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});


// para slider con jquery
var slider=$('#slider');
var siguiente=$('#btn-next');
var anterior=$('#btn-prev');

// funcion para colocar la ultima imagen en la primera
$('#slider section:last').insertBefore('#slider section:first');
// aqui le damos -100% para que se pueda mostra la otra imagen
slider.css('margin-left', '-'+100+'%');

function moverD(){
    slider.animate({marginLeft:'-'+200+'%'},
   700, function(){
       $('#slider section:first').insertAfter('#slider section:last');
       slider.css('margin-left', '-'+100+'%');

   });
}



function moverI(){
    slider.animate({marginLeft:0+'%'},
   700, function(){

       $('#slider section:last').insertBefore('#slider section:first');
       slider.css('margin-left', '-'+100+'%');

   });
}

siguiente.on('click', function(){
    moverD();
});

anterior.on('click', function(){
    moverI();
});

function auto(){
    interval= setInterval(function(){
        moverD();
    }, 4000);
}

auto();


// con esto seleccionamos todas las imagenes de la galeria.la que tenemos abjo
var imagenes = document.querySelectorAll(".galeria_img");

// el modal para ocultarlo o mostrarlo.este es ell que va a mostrer el contenido
var modal = document.querySelector("#modal");

// a este le va os a seleccionar o colocar la imagen
var img = document.querySelector("#modal__img");

// con este para ocultar o mstrar ls imagenes
 
for( var i = 0; i < imagenes.length; i++){
    // cuando se le de click a una img se aplica la funcion
    imagenes[i].addEventListener("click", function(e){
        // ls cual le agrega o le quita la clase modal__open
modal.classList.toggle("modal__open");
// target detecta a acual imagen se le hizo click y se le agrega a la var src
var src = e.target.src;
// a la var img en el src le agregamos la variable src que ya contine el src que a agregado de la imagen a la cual le hemos dado click
img.setAttribute("src", src);
    });
}

// este if es porque daba un error
if(document.querySelector("#modal__boton")){
    modal__boton.addEventListener("click", function(){
        modal.classList.toggle("modal__open");
    
    })}; 
var error = document.getElementById("error");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("Apellido");
var email = document.getElementById("email");

nombre.addEventListener("blur", validarInput);
apellido.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);



// validar formulario

function validarInput(){
    if(this.value== ""){
error.style.display = "block";
error.style.border = "1px solid red";
error.style.color = "#ffffff";
error.style.textAlign = "center";

error.innerHTML = 'debe introducir campo';
this.style.border = '1px solid red';
    }
    else {
        error.style.display = 'none';
        this.style.border = '1px solid #000000';
    }
}

email.addEventListener("blur", validarEmail);
 function validarEmail(){
     if(this.value.indexOf("@") > -1){
        error.style.display = 'none';
        this.style.border = '1px solid #000000';
     } else{
        error.style.display = "block";
        error.style.border = "1px solid red";
        error.style.color = "white";
        error.innerHTML = 'debe contener @ ';
        error.style.textAlign = "center";
        this.style.border = '1px solid red';
        
     }
 }

var calcular = document.getElementById("calcular");
var productos = document.getElementById("productos");
var total = document.getElementById("total");
var pagar = document.getElementById("pagar");

var pequeño =document.getElementById("pequeño");
var mediano = document.getElementById("mediano");
var grande = document.getElementById("grande");
var listaDeProductos = document.getElementById('productos');
var suma = document.getElementById('total');


calcular.addEventListener('click', calcularMontos);

			function calcularMontos(event) {
					var perropequeño = parseInt(pequeño.value, 10) || 0;
					var perromediano = parseInt(mediano.value, 10) || 0;
					var perrogrande = parseInt(grande.value, 10) || 0;
                    console.log(calcular);

                    	
					var totalPagar =
						pequeño.value * 15.000 +
						mediano.value * 22.000 +
						grande.value * 34.000;
						
					// con esta variable creamos un array para mostrar los productos seleccionados
					var listadoDeProductos = [];
					// creamos una condicion diciendo que si es mayor o igual a 1
					if (perropequeño >= 1) {
						// push para ir agregando
						listadoDeProductos.push(perropequeño + ' perro pequeño');
					}
					if (perromediano >= 1) {
						listadoDeProductos.push(perromediano + ' perro mediano ');
					}
                    if (perrogrande >= 1) {
						listadoDeProductos.push(perrogrande + ' perro grande ');
					}
				

				// le aplicamos este display para que muestre el fondo una ves qaue se haga la operacion
				listaDeProductos.style.display = 'block';

				/* listaDeProductos es el id que le asignamos a resumen en el html,le 
aplicamos innerHTML para que se imprima en la pagina como html,*/
				listaDeProductos.innerHTML = '';
				for(var i = 0; i < listadoDeProductos.length; i++) {
					listaDeProductos.innerHTML += listadoDeProductos[i] + '</br>';
				}
				// toFixed es para que solo se muestren dos decimales
                suma.innerHTML = ' $ ' + totalPagar.toFixed(2);
                suma.style.display = 'block';

            }