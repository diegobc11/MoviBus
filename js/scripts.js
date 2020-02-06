/* intenté hacerlo con getElementByNameClass para solo tener que hacer una sola funcion pero no me dejaba */
function myFunction1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}
function myFunction2() {  
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}
function myFunction3() {  
  var popup2 = document.getElementById("myPopup3");
  popup2.classList.toggle("show");
}
function myFunction4() {  
  var popup2 = document.getElementById("myPopup4");
  popup2.classList.toggle("show");
}
function myFunction5() {  
  var popup2 = document.getElementById("myPopup5");
  popup2.classList.toggle("show");
}

//hacer que la altura del footer sea la altura de las tres partes que lo componen
//hay que iniciarlas fuera de la funcion ya que en el primer instante aun no hemos hecho ningun resize de la pantalla por lo que no nos entraria en la funcion para ejecutar el calculo.
var alturaFooter1 = document.getElementById('dondeEstamos').offsetHeight;
var alturaFooter2 = document.getElementById('empleados').offsetHeight;
var alturaFooter3 = document.getElementById('politicasEmpresa').offsetHeight;

var alturaContenido = document.getElementById('containerInfo').offsetHeight;
var alturaEncabezado = document.getElementById('encabezado').offsetHeight;
var alturaMenuDer = document.getElementById('menuDerecho').offsetHeight;
// document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + alturaMenuDer + 100 + 'px';
// console.log(document.getElementById('cuerpo').style.height);

///en movil dejamos que sea solo posible verlo en vertical.
//var xxx = window.matchMedia("(max-width: 500px)");
//if (xxx.matches) {
//  screen.lockOrientation('portrait');
//}

var xx = window.matchMedia("(min-width: 1200px)");
var x = window.matchMedia("(min-width: 991px)");
var resizePantalla = function alturaDelFooter(x) {
  alturaFooter1 = document.getElementById('dondeEstamos').offsetHeight;
  alturaFooter2 = document.getElementById('empleados').offsetHeight;
  alturaFooter3 = document.getElementById('politicasEmpresa').offsetHeight;
  // funcion que se ejecuta la primera vez que se carga la pagina
  if (xx.matches) {
    document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + 100 + 'px';
  }
  else if (x.matches) {
    document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + alturaMenuDer + 150 + 'px';
  }
  else {
    document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + alturaMenuDer + 100 + 'px';
    alturaFooter = alturaFooter1 + alturaFooter2 + alturaFooter3;
    document.getElementById('footer').style.height = alturaFooter + 'px';
  }
  // funcion que se ejecuta cada vez que se ajusta el ancho de la pantalla.
  window.addEventListener("resize", resize1);
  function resize1() {
    //calculo de la altura del encabezado mas el contenido para situar el pie de pagina.
    alturaContenido = document.getElementById('containerInfo').offsetHeight;
    alturaEncabezado = document.getElementById('encabezado').offsetHeight;
    alturaMenuDer = document.getElementById('menuDerecho').offsetHeight;
    document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + alturaMenuDer + 150 + 'px';
    
    if (xx.matches) {
      alturaContenido = document.getElementById('containerInfo').offsetHeight;
      alturaEncabezado = document.getElementById('encabezado').offsetHeight;
      document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + 100 + 'px';
    }
    else if (x.matches) {
      alturaFooter1 = document.getElementById('dondeEstamos').offsetHeight;
      alturaFooter2 = document.getElementById('empleados').offsetHeight;
      alturaFooter3 = document.getElementById('politicasEmpresa').offsetHeight;
      alturaFooter = alturaFooter1;
      document.getElementById('footer').style.height = alturaFooter + 'px';
      // console.log(alturaFooter + 'altura de una fila');
    }
    else{
      alturaFooter1 = document.getElementById('dondeEstamos').offsetHeight;
      alturaFooter2 = document.getElementById('empleados').offsetHeight;
      alturaFooter3 = document.getElementById('politicasEmpresa').offsetHeight;
      alturaFooter = alturaFooter1 + alturaFooter2 + alturaFooter3 + 20;
      document.getElementById('footer').style.height = alturaFooter + 'px';
      // console.log(alturaFooter + 'altura de triple fila');
    }
  }  
}
resizePantalla(x);             // llamada a la funcion
x.addListener(resizePantalla); // listener de la funcion que actualize para ver si hubo cambios de pixeles

//posiocionamos el menu Derecho cuando la pantalla está por debajo de los 1200px.
var menuDerechoPos = document.getElementById('menuDerecho').style;
function posicionMenuDerecho(y) {
  // menuDerechoPos = document.getElementById('menuDerecho').style;
  menuDerechoPos.top = alturaContenido + alturaEncabezado + 50 + 'px';
  window.addEventListener("resize", resize2);
  function resize2() {
    if (y.matches) {
      menuDerechoPos = document.getElementById('menuDerecho').style;
      menuDerechoPos.top = alturaContenido + alturaEncabezado + 50 + 'px';
      //USAR TRANSFORM PARA ALINEARLO TAMBIEN AL CENTRO.
      // console.log('menuDerPos: ', menuDerechoPos.top);
    }
    else {
    }
  }
}
var y = window.matchMedia("(max-width: 1199px)");
posicionMenuDerecho(y);
y.addListener(posicionMenuDerecho); 

//Funcion para mostrar los submenus de la barra de busqueda y que solo se muestre el que si clica, y que se escondan cuando se clica en cualquier otra parte de la pantalla.
var divBarra1 = document.getElementById('dropdownContentBarra1');
var divBarra2 = document.getElementById('dropdownContentBarra2');
var btnB1 = document.getElementById('btnBarra1');
var btnB2 = document.getElementById('btnBarra2')
divBarra2.style.display = 'none';
divBarra1.style.display = 'none';
var contadorBarra = 0;
var contadorBarra2 = 0;
window.onload = function() {  
  document.onclick = function(e){   //cada click en la pantalla hace una llamada a esta funcion, la e significa un evento y es una variavle del sistema (?)
    if (e.target.id == 'btnBarra1' && contadorBarra == 0) {
      divBarra1.style.display = 'block';
      btnB1.style.backgroundColor = 'white';
      btnB1.style.color = 'black';
      divBarra2.style.display = 'none';
      btnB2.style.backgroundColor = 'green';
      btnB2.style.color = 'rgb(255, 202, 87)';
      contadorBarra = 1
      contadorBarra2 = 0
    }
    else if (e.target.id == 'btnBarra2' && contadorBarra2 == 0) {
      divBarra2.style.display = 'block';
      btnB2.style.backgroundColor = 'white';
      btnB1.style.color = 'black';
      divBarra1.style.display = 'none';
      btnB1.style.backgroundColor = 'green';
      btnB1.style.color = 'white';
      contadorBarra2 = 1
      contadorBarra = 0
    }
    else if (e.target.id == 'btnBarra1' && contadorBarra == 1) {
      divBarra1.style.display = 'none';
      btnB1.style.backgroundColor = 'green';
      btnB1.style.color = 'white';
      contadorBarra = 0;
    }
    else if (e.target.id == 'btnBarra2' && contadorBarra2 == 1) {
      divBarra2.style.display = 'none';
      btnB2.style.backgroundColor = 'green';
      btnB2.style.color = 'rgb(255, 202, 87)';
      contadorBarra2 = 0;
    }
    else {
      divBarra1.style.display = 'none';
      divBarra2.style.display = 'none';
      btnB1.style.backgroundColor = 'green';
      btnB1.style.color = 'white';
      btnB2.style.backgroundColor = 'green';
      btnB2.style.color = 'rgb(255, 202, 87)';
      contadorBarra = 0;
      contadorBarra2 = 0;
    }
  }
}

//Funciones para los botones en dispositivos moviles
var pulsado = 0;
var pulsado2 = 0;
var pulsado3 = 0;
var pulsado4 = 0;
var pulsado5 = 0;
var pulsado6 = 0;

var txtMovil = document.getElementById('BarraMin1');
var iconoMovil = document.getElementById('iconoM');
var btnMovil = document.getElementById('btnBarraMin1');
function fadeOut() {  //Inicio
  if (pulsado == 0) {
    txtMovil.style.fontSize = 0;
    iconoMovil.style.marginLeft = 80 + 'px';
    pulsado = 1;
    pulsado2 = 1;pulsado3 = 1;pulsado4 = 1;pulsado5 = 1;pulsado6 = 1;
    fadeOut2(); fadeOut3(); fadeOut4(); fadeOut5(); fadeOut6();
  }
  else {
    txtMovil.style.fontSize = 16 + 'px';
    iconoMovil.style.marginLeft = 0 + 'px';
    pulsado = 0;
  }
}
var txtMovil2 = document.getElementById('BarraMin2');
var iconoMovil2 = document.getElementById('iconoM2');
var desplegableMovil2 = document.getElementById('contenidoDes2');
var textoExpansible2a = document.querySelector('#textoExpansible2a');
var textoExpansible2b = document.querySelector('#textoExpansible2b');
var textoExpansible2c = document.querySelector('#textoExpansible2c');
var textoExpansible2d = document.querySelector('#textoExpansible2d');
// var desplegableMovil2INFO = document.getElementsByClassName('contenidoDesplegableMOV')
function fadeOut2() {  //tarifas y bonos.
  if (pulsado2 == 0) {  //pulsado (activado)
    txtMovil2.style.fontSize = 0;
    iconoMovil2.style.marginLeft = 80 + 'px';
    ///////////HE INTENTADO HACERLO CON UN BUCLE FOR RECORRIENDO TODOS ESTOS ELEMENTOS QUE SON DE LA MISMA CLASE Y HACE LO QUE QUIERO PERO SIN EJECUTAR LA TRANSICION.
    // for (var i = 0; i < textoExpansible2.length; i++) {
    //   textoExpansible2[i].classList.add('activated');
    //   textoExpansible2[i].style.display = 'block';
    // }
    textoExpansible2a.classList.add('activated');
    textoExpansible2a.style.display = 'block';
    textoExpansible2b.classList.add('activated');
    textoExpansible2b.style.display = 'block';
    textoExpansible2c.classList.add('activated');
    textoExpansible2c.style.display = 'block';
    textoExpansible2d.classList.add('activated');
    textoExpansible2d.style.display = 'block';
    pulsado2 = 1;
    pulsado = 1;pulsado3 = 1;pulsado4 = 1;pulsado5 = 1;pulsado6 = 1;
    fadeOut(); fadeOut3(); fadeOut4(); fadeOut5(); fadeOut6();
  }
  else {
    txtMovil2.style.fontSize = 16 + 'px';
    iconoMovil2.style.marginLeft = 0 + 'px';
    pulsado2 = 0;
    textoExpansible2a.classList.remove('activated');
    textoExpansible2b.classList.remove('activated');
    textoExpansible2c.classList.remove('activated');
    textoExpansible2d.classList.remove('activated');
    // desplegableMovil2.style.height = '0px';
    // for (var i = 0; i < textoExpansible2.length; i++) {
    //   textoExpansible2[i].classList.remove('activated');
    //   textoExpansible2[i].style.display = 'none';
    // }
  }
}
var txtMovil3 = document.getElementById('BarraMin3');
var iconoMovil3 = document.getElementById('iconoM3');
var desplegableMovil3 = document.getElementById('contenidoDes3')
var textoExpansible3a = document.querySelector('#textoExpansible3a');
var textoExpansible3b = document.querySelector('#textoExpansible3b');
var textoExpansible3c = document.querySelector('#textoExpansible3c');
var textoExpansible3d = document.querySelector('#textoExpansible3d');
var textoExpansible3e = document.querySelector('#textoExpansible3e');
function fadeOut3() { //lineas y horarios
  if (pulsado3 == 0) {
    txtMovil3.style.fontSize = 0;
    iconoMovil3.style.marginLeft = 80 + 'px';
    textoExpansible3a.classList.add('activated');
    textoExpansible3a.style.display = 'block';
    textoExpansible3b.classList.add('activated');
    textoExpansible3b.style.display = 'block';
    textoExpansible3c.classList.add('activated');
    textoExpansible3c.style.display = 'block';
    textoExpansible3d.classList.add('activated');
    textoExpansible3d.style.display = 'block';
    textoExpansible3e.classList.add('activated');
    textoExpansible3e.style.display = 'block';
    pulsado3 = 1;
    pulsado2 = 1;pulsado = 1;pulsado4 = 1;pulsado5 = 1;pulsado6 = 1;
    fadeOut2(); fadeOut(); fadeOut4(); fadeOut5(); fadeOut6();
  }
  else {
    txtMovil3.style.fontSize = 16 + 'px';
    iconoMovil3.style.marginLeft = 0 + 'px';
    textoExpansible3a.classList.remove('activated');
    textoExpansible3b.classList.remove('activated');
    textoExpansible3c.classList.remove('activated');
    textoExpansible3d.classList.remove('activated');
    textoExpansible3e.classList.remove('activated');
    pulsado3 = 0;
  }
}
var txtMovil4 = document.getElementById('BarraMin4');
var iconoMovil4 = document.getElementById('iconoM4');
var desplegableMovil4 = document.getElementById('contenidoDes4')
var textoExpansible4a = document.querySelector('#textoExpansible4a');
var textoExpansible4b = document.querySelector('#textoExpansible4b');
var textoExpansible4c = document.querySelector('#textoExpansible4c');
var textoExpansible4d = document.querySelector('#textoExpansible4d');
var textoExpansible4e = document.querySelector('#textoExpansible4e');
var textoExpansible4f = document.querySelector('#textoExpansible4f');
function fadeOut4() { //estaciones y servicios
  if (pulsado4 == 0) {
    txtMovil4.style.fontSize = 0;
    iconoMovil4.style.marginLeft = 80 + 'px';
    textoExpansible4a.classList.add('activated');
    textoExpansible4a.style.display = 'block';
    textoExpansible4b.classList.add('activated');
    textoExpansible4b.style.display = 'block';
    textoExpansible4c.classList.add('activated');
    textoExpansible4c.style.display = 'block';
    textoExpansible4d.classList.add('activated');
    textoExpansible4d.style.display = 'block';
    textoExpansible4e.classList.add('activated');
    textoExpansible4e.style.display = 'block';
    textoExpansible4f.classList.add('activated');
    textoExpansible4f.style.display = 'block';
    pulsado4 = 1;
    pulsado = 1;pulsado3 = 1;pulsado2 = 1;pulsado5 = 1;pulsado6 = 1;
    fadeOut(); fadeOut3(); fadeOut2(); fadeOut5(); fadeOut6();
  }
  else {
    txtMovil4.style.fontSize = 16 + 'px';
    iconoMovil4.style.marginLeft = 0 + 'px';
    textoExpansible4a.classList.remove('activated');
    textoExpansible4b.classList.remove('activated');
    textoExpansible4c.classList.remove('activated');
    textoExpansible4d.classList.remove('activated');
    textoExpansible4e.classList.remove('activated');
    textoExpansible4f.classList.remove('activated');
    pulsado4 = 0;
  }
}
var txtMovil5 = document.getElementById('BarraMin5');
var iconoMovil5 = document.getElementById('iconoM5');
var desplegableMovil5 = document.getElementById('contenidoDes5')
var textoExpansible5a = document.querySelector('#textoExpansible5a');
var textoExpansible5b = document.querySelector('#textoExpansible5b');
function fadeOut5() {  //la empresa
  if (pulsado5 == 0) {
    txtMovil5.style.fontSize = 0;
    iconoMovil5.style.marginLeft = 80 + 'px';
    textoExpansible5a.classList.add('activated');
    textoExpansible5a.style.display = 'block';
    textoExpansible5b.classList.add('activated');
    textoExpansible5b.style.display = 'block';
    pulsado5 = 1;
    pulsado = 1;pulsado3 = 1;pulsado4 = 1;pulsado2 = 1;pulsado6 = 1;
    fadeOut(); fadeOut3(); fadeOut4(); fadeOut2(); fadeOut6();
  }
  else {
    txtMovil5.style.fontSize = 16 + 'px';
    iconoMovil5.style.marginLeft = 0 + 'px';
    textoExpansible5a.classList.remove('activated');
    textoExpansible5b.classList.remove('activated');
    pulsado5 = 0;
  }
}
var txtMovil6 = document.getElementById('BarraMin6');
var iconoMovil6 = document.getElementById('iconoM6');
function fadeOut6() {  //mas...
  if (pulsado6 == 0) {
    txtMovil6.style.fontSize = 0;
    iconoMovil6.style.marginLeft = 80 + 'px';
    pulsado6 = 1;
    pulsado = 1;pulsado3 = 1;pulsado4 = 1;pulsado5 = 1;pulsado2 = 1;
    fadeOut(); fadeOut3(); fadeOut4(); fadeOut5(); fadeOut2();
  }
  else {
    txtMovil6.style.fontSize = 16 + 'px';
    iconoMovil6.style.marginLeft = 0 + 'px';
    pulsado6 = 0;
  }
}
//Funcion del 'Burger' Menu (moviles) FUNCION TOGGLE!
var menuColgante = document.getElementById('menuColgante');
var contadorPrimeraVez = 0;  // con este contador forzamos que la primera vez que se pulse el boton se desplegue.
function desplegarMenu() {
  menuColgante.style.display = "block";
  if (menuColgante.style.display != 'none' && contadorPrimeraVez == 1) {
    menuColgante.style.display = "none";
    console.log('klk');
    contadorPrimeraVez = 0;
  }
  else {
    menuColgante.style.display = "block";
    console.log('miPana');
    contadorPrimeraVez = 1;
  }  
  // Cada vez que pulsamos el menu aparece y desaparece por lo que hay que reajustar el alto del cuerpo (semejante a la accion de la funcion resize)
  alturaContenido = document.getElementById('containerInfo').offsetHeight;
  alturaEncabezado = document.getElementById('encabezado').offsetHeight;
  alturaMenuDer = document.getElementById('menuDerecho').offsetHeight;
  menuDerechoPos.top = alturaContenido + alturaEncabezado + 50 + 'px';
  document.getElementById('cuerpo').style.height = alturaContenido + alturaEncabezado + alturaMenuDer + 150 + 'px';
}
