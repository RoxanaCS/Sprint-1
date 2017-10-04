var sentence = prompt('Ingresa el número de tu tarjeta de crédito');

var isValidCard = function (sentence) {    //transformar la variable de entrada (sentence) en un array de numeros y darlo vuelta
var array = Array.from(sentence); //transformar la variable de entrada "sentence" en un array
//console.log(array);
var newArray = [];
//console.log(array.length);
for (var i = 0; i < array.length; i++){
  var element = parseInt(array[i]);   //transformar el array compuesto de strings a numbers
  if (isNaN(element) === false) {        //condicion para que el usuario no ingrese espacios o letras
  newArray.push(element);
}
else {
  return alert ("Por favor ingrese un número válido");
}
}
//console.log(newArray);
   newArray.reverse();                       //invertir el orden del array de numbers
   //console.log(newArray);
}

  for (var j =1 ; j<newArray.length; j=j+2){  //ubicar los numeros en posición par y multiplicarlos por 2
  if ((newArray[j]*2) >=10){

  }

     //sumar los digitos del resultado de la multiplicacion de los numeros en ubicacion par por 2 y cambiarlos en el array inverso
   }


 //verificar que el residuo de 10 de la suma de todos los números es 0
}
}
