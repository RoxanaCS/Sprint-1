var sentence = prompt('Ingresa el número de tu tarjeta de crédito');

var isValidCard = function (sentence) {    //transformar la variable de entrada (sentence) en un array y darlo vuelta
var array = Array.from(sentence);
//console.log(array)
var newArray = [];
//console.log(array.length)
for (var i = 0; i < array.length; i++){
  newArray.push(parseInt(array[i]));
}
  return newArray.reverse()

  //verificar que el residuo de 10 de la suma de todos los números es 0
}
