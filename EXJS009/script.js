//variables globales
let num1;
let num2;
let operacion;

function init(){
//Guardamos los elementos id en sus respectivas variables
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');
  }
  

  //Programamos los eventos de click sobre los elementos tipo button: números, operaciones, igual y reset.

uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
//referencia a la función resetear creada después
reset.onclick = function(e){
    resetear();
}

/*Eventos de operaciones guardamos en la variable num1 lo que tenemos en el contenedor resultado 
y la operación que se desea realizar*/

//Se hace referencia a la función limpiar que está creada después 
suma.onclick = function(e){
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    num1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    num1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
/*para el boton de igual almacenamos en la variable num2 lo que hay en el contenedor de resutado
y mandamos llamar el método resolver */
igual.onclick = function(e){
    num2 = resultado.textContent;
    resolver();
}

 //Creamos la función limpiar donde ponemos el contenedor de resultado en vacío.

function limpiar(){
    resultado.textContent = "";
  }

 //Creamos la función resetear para resetear las variables num1, num2 y operación.
  function resetear(){
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
  }
/*Creamos la función resolver conforme a los valores que se han ingresado, 
realizamos la operación necesaria y mostramos el resultado en el contenedor de resultados.*/
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
          res = parseFloat(num1) - parseFloat(num2);
          break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
    }
    
    resetear();
    resultado.textContent = res;
  }
  
  