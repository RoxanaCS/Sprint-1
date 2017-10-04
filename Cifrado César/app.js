var sentence = prompt('Escriba una frase').toUpperCase();

var encrypted = function (sentence) {
var arrayPosition = [];
var newString =""
  for (var i=0; i< sentence.length; i++){ //Obtener la posición ASCII del caracter
    code = sentence.charCodeAt(i);
    code = (code-65+33) % 26 +65   /* aplicar formula para obtener la posición
del caracter corrido en 33 espacios a la derecha en la tabla ASCII */
  arrayPosition.push(String.fromCharCode(code))  //usar la posición para obtener qué letra corresponde
  newString= arrayPosition.join("") //convertir a string el array

  }
  return alert (newString);
  }

  encrypted (sentence);    //llamando a la función
