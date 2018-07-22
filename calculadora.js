window.onload= function () {
	pantalla=document.getElementById("textoPantalla"); 
}

x="0"; //guardar numero en pantalla
xi=1; //iniciar numero en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no 1=si S
ni=0; //numero oculto o en espera 
op="no"; //operacione en curso; no=sin operacion.

function numero(xx) {
	if (x=="0"|| xi==1) {
		pantalla.innerHTML=xx; //mostrar en pantalla
		x=xx; //guardar numero
	}

	else { //continuar numero

		pantalla.innerHTML+=xx; //añadir y mostrar en pantalla
		x+=xx; //añadir y guardar 
	}
	xi=0 // el numero esta iniciado y podemos ampliarlo 
}

function operar(s) {
	igualar(); 
	ni=x; //ponemos el primer numero en numero en espera para escribir el segundo
	op=s; // guardamos el tipo de operacion 
	xi=1; // iniciamos la pantalla 
}

function igualar() {
	if (op=="no") { pantalla.innerHTML=x; } //no hay operacion pendiente

	else { 
		s1=ni+op+x; // operacion en cadena
		so1=eval(s1); // cadena en codigo y se resuelve 
		pantalla.innerHTML=so1; //mostramos la solucion
		x=so1; //guardamos la solucion 
		op="no"; //ya no hay operaciones pendientes 
		xi=1; // se puede reiniciar la pantalla  
	}
}

function raizc() {
	x=Math.sqrt(x); //raiz cuadrada
	pantalla.innerHTML=x; //mostrar resultado
	op="no"; //quitar operaciones pendientes 
	xi=1; // se puede reiniciar la pantalla 
}


function porcent() {
	x=x/100; //dividir por 100
	pantalla.innerHTML=x; // mostrar en pantalla 
	igualar(); //resolver y mostrar operaciones pendientes 
	xi=1; // reiniciar pantalla 
}

//Como cosa distinta vemos que tras dividir por 100 llamamos a función igualar(); esto hace que el porcentaje se pueda aplicar tras una operación, (normalmente la multiplicación). Por ejemplo, para hallar el 5% de 500 escribiremos en la calculadora: 500 * 5 %.

function opuesto() {
	nx= Number(x); //convertir en numero 
	nx=-nx; //cambiar de signo 
	x=String(nx); //convertir en cadena otra vez 
	pantalla.innerHTML=x; //mostrar en pantalla 
}

function inve()
{
	nx=Number(x); //convertir a numero 
	nx=(1/nx); // calcular 
	x=String(nx); //volver a convertir en cadena 
	pantalla.innerHTML=x; //mostrar en pantalla 
	xi=1; //reiniciar pantalla
}

function retro() {
	cifras=x.length; //hayar el numero de caracteres en la pantalla 
	br=x.substr(cifras-1,cifras); //info del ultimo caracter
	x=x.substr(0,cifras-1); //quitar el ultimo caracter 
	if (x=="") {
		x="0"; //si ya no quedan caracteres se pone el 0 
	}
	if (br==".") {
		coma=0; // si hemos quitado la coma se puede escribir de nuevo
	}
    pantalla.innerHTML=x; //mostrar resultado
}

function borradoParcial() {
	pantalla.innerHTML=0; //borrado de pantalla
	x=0; //Borrado indicador numero de pantalla
	coma=0; //reiniciamos tambien la coma 
}

function borradoTotal(){
	pantalla.innerHTML=0; // poner la pantalla en 0 
	x="0"; // reiniciar numero en pantalla
	coma=0;// reiniciar coma 
	ni=0; // indicador de numero oculto a 0 
	op="no"; //borrar operacion en curso
}
