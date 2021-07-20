const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png') {
      miImage.setAttribute('src','images/icono14.svg');
    } else {
      miImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo1 = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  localStorage.setItem('nombre', miNombre);
  miTitulo1.textContent = 'Mozilla es genial,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo1.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

//document.getElementById("btn").onclick = estableceNombreUsuario;

miBoton.onclick = estableceNombreUsuario;


