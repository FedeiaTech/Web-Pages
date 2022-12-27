function edad() {
	let edad;
	edad = prompt("dime tu edad");
	if (edad < 18) {
		document.write("no puede conducir porque es menor de edad. <br>");
	}
	else document.write("puede manejar. <br>");
}

function notas() {
	let nota;
	nota = prompt('inserte la nota');
	if (nota > 0 && nota <= 3) {
		alert('tiene que recursar');
	}
	else if (nota <= 6) {
		alert('tiene que rendir de nuevo');
	}
	else if (nota <= 10) {
		alert('esta aprobado');
	}
	else alert('no es una calificacion valida');
}

document.write("Hola usted ")
edad()
document.write("Y usted ")
edad()