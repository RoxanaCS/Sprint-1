var initial = function (){
  do{
    var sentence = prompt('Escriba una frase');
    var trueSentence
    for (var i=0; i<sentence.length; i++){
      code = sentence.charCodeAt(i)
      if((code>=65 && code <=90) || (code>=97 && code <=122)){
        trueSentence = true;
    } else {
      trueSentence = false;
      alert("Ingrese solo letras");
      i = sentence.length;
    }
  }
} while (trueSentence == false);

principal2(sentence);
}


var principal2 = function(sentence2){    //funcion para elegir cifrar o descifrar
	do{
		var respuesta = prompt("Indique el número de lo que desea hacer: 1)Cifrar - 2)Descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cipher(sentence2);
			} else if (respuesta == "2") {
				decipher(sentence2);
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

var cipher = function (sentence2) {
var arrayPosition = [];
var newString = "";
var validLetter;
var code;
  for (var i=0; i< sentence2.length; i++){ //Obtener la posición ASCII del caracter
    code = sentence2.charCodeAt(i);
    if (code <=90){
      validLetter = 65;
    } else {
      validLetter =97;
    }
    code = (code- validLetter + 33) % 26 +validLetter;   /* aplicar formula para obtener la posición
del caracter corrido en 33 espacios a la derecha en la tabla ASCII */
  arrayPosition.push(String.fromCharCode(code));  //usar la posición para obtener qué letra corresponde
  newString= arrayPosition.join(""); //convertir a string el array

  }
  return alert (newString);
  }

  var decipher = function (sentence3) { // Funcion para descifrar
  var arrayPosition = [];
  var newString ="";
  var validLetter;
  var code;
  console.log(sentence3)
    for (var i=0; i< sentence3.length; i++){ //Obtener la posición ASCII del caracter
      code = sentence3.charCodeAt(i);
      if (code <=90){
        validLetter = 65;
        console.log("es mayuscula")
      } else {
        validLetter =97;
        console.log("no es mayuscula")
      }
      console.log(code)
      code = (code + validLetter - 33) % 26 + validLetter;   /* aplicar formula para obtener la posición
  del caracter corrido en 33 espacios a la izquierda en la tabla ASCII */
  console.log((code+validLetter-33)%26)
  console.log(code)
    arrayPosition.push(String.fromCharCode(code));  //usar la posición para obtener qué letra corresponde
    newString= arrayPosition.join(""); //convertir a string el array
  console.log(newString)
    }
    return alert (newString);

    }

initial();
