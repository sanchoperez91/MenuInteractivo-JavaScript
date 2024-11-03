var divTitulo=document.createElement('div');
divTitulo.textContent='Opciones del menú del dia';
divTitulo.id='divTitulo';
document.body.appendChild(divTitulo);

var divPrimero=document.createElement('div');
divPrimero.id='divPrimero';
document.body.appendChild(divPrimero);

var divSegundo=document.createElement('div');
divSegundo.id='divSegundo';
document.body.appendChild(divSegundo);

var divTercero=document.createElement('div');
divTercero.id='divTercero';
document.body.appendChild(divTercero);

var divCuarto=document.createElement('div');
divCuarto.id='divCuarto';
document.body.appendChild(divCuarto);

var divBoton=document.createElement('div');
divBoton.id='divBoton';
document.body.appendChild(divBoton);

//__________________________________
var sprimero=document.createElement('select');
sprimero.id='sprimero';
divPrimero.appendChild(sprimero);

var o1default=document.createElement('option');
o1default.value=0;
o1default.textContent="(Elegir primer plato)";
sprimero.appendChild(o1default);

var o1lentejas=document.createElement('option');
o1lentejas.value=3;
o1lentejas.textContent="Lentejas con chorizo (3€)";
sprimero.appendChild(o1lentejas);

var o1crema=document.createElement('option');
o1crema.value=2;
o1crema.textContent="Crema de calabaza (2€)";
sprimero.appendChild(o1crema);

var divImagen1=document.createElement('img');
divImagen1.id='divImagen1';
divImagen1.src='default.jpg';
divPrimero.appendChild(divImagen1);

//________________________________________

var ssegundo=document.createElement('select');
ssegundo.id='ssegundo';
divSegundo.appendChild(ssegundo);

var o2default=document.createElement('option');
o2default.value=0;
o2default.textContent="(Elegir primer plato)";
ssegundo.appendChild(o2default);

var o2escalope=document.createElement('option');
o2escalope.value=4;
o2escalope.textContent="Escalope de pollo (4€)";
ssegundo.appendChild(o2escalope);

var o2lubina=document.createElement('option');
o2lubina.value=5;
o2lubina.textContent="Lubina al horno (5€)";
ssegundo.appendChild(o2lubina);

var divImagen2=document.createElement('img');
divImagen2.id='divImagen1';
divImagen2.src='default.jpg';
divSegundo.appendChild(divImagen2);

//________________________________________

var stercero=document.createElement('select');
stercero.id='stercero';
divTercero.appendChild(stercero);

var o3default=document.createElement('option');
o3default.value=0;
o3default.textContent="(Elegir postre)";
stercero.appendChild(o3default);

var o3flan=document.createElement('option');
o3flan.value=1;
o3flan.textContent="Flan de huevo (1€)";
stercero.appendChild(o3flan);

var o3arroz=document.createElement('option');
o3arroz.value=2;
o3arroz.textContent="Arroz con leche (2€)";
stercero.appendChild(o3arroz);

var divImagen3=document.createElement('img');
divImagen3.id='divImagen3';
divImagen3.src='default.jpg';
divTercero.appendChild(divImagen3);

//____________________________________
var dto=document.createElement('input');
dto.type='checkbox';
dto.id='dto';
divCuarto.appendChild(dto);

var label = document.createElement('label');
label.htmlFor = 'dto'; 
label.textContent = "Consigue un 10% de descuento";
divCuarto.appendChild(label);

var boton=document.createElement('button');
boton.type='submit';
boton.textContent= '¡A comer!';
boton.id='divBoton';
divBoton.appendChild(boton);

//____________PROGRAMA_________//
boton.addEventListener('click', function() {
 
    var valorPrimero = parseFloat(sprimero.value); 
    var valorSegundo = parseFloat(ssegundo.value); 
    var valorPostre = parseFloat(stercero.value); 
    // Sumar los valores seleccionados
    var total = valorPrimero+valorSegundo+valorPostre;

    // Verificar si el checkbox de descuento está marcado
    if (dto.checked) {
        total *= 0.9; // Aplicar el 10% de descuento
    }
    
    // Mostrar el total en una alerta
    alert("El precio total es: " + total.toFixed(2) + "€");
});