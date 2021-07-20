let  icono = document.getElementById("logo");
icono.addEventListener("click", inicio);
let  cabe = document.getElementById("cabecera");

function inicio (){
	cabe.textContent = "Who is there?";
	icono.setAttribute('src','IMG/inicio.png');
	let nombre = prompt("Who is there?");
	if (nombre=="Admin")
		{
			let clave = prompt("Introduce la clave");
			if (clave == "TheMaster"){
				alert ("Welcome!");
			}
			else if (clave == null)
					alert("canceled")
			else if   (clave !== "TheMaster") 
					alert("Wrong password")
		}
	else if (nombre == null)
			alert("canceled")
	else if   (nombre !== "admin")
			alert("I don't know you")
}
	


/*
  let userName = prompt("¿Quién está ahí? ", '');
  if (userName === 'Admin') {
     let pass = prompt('¿Contraseña? ', '');
     if (pass === 'ElMaestro') {
     alert( '¡Bienvenido!' );
  } else if (pass === '' || pass === null) {
    alert( 'Cancelado' );
  } else {
    alert( 'contraseña incorrecta' );
  } 
} else if (userName === '' || userName === null) {
  alert( 'Cancelado' );
} else {
  alert( "No te conozco" );
}
*/

