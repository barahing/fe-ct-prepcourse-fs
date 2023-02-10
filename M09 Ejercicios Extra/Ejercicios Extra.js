/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [];
   var claves = Object.keys(objeto);
   
   var propiedades = Object.values(objeto);
   propiedades;
   for (i=0; i<claves.length; i++){
      arregloPadre[i] = [claves[i], propiedades[i]];
   }
   return arregloPadre;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   stringEnArray = string.split('');                        // Transformamos el String en Array
   var temporal;                                            // Variable para ordenamiento
   // Ordenamos el Array
   
   stringEnArray.sort();
   var objeto = {};                                         // Se crea el objeto a devolver
   var repeticion = 1;                                      // Inicializamos la propiedad cantidad en 1
   for (let i=0; i<stringEnArray.length; i++){              // Comparamos claves para ver cuántas veces se repiten
      if (stringEnArray[i]===stringEnArray[i+1] && stringEnArray[i+1] != undefined)
         repeticion++;
      else{
         objeto[stringEnArray[i].toString()] = repeticion;  // Añadimos la clave y su correspondiente valor
         repeticion = 1;
      }
               
               
   }
      return objeto;                                        // Retornamos el objeto final
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
      var stringADevolver = [];
   
      for (let i=string.length; i>=0;i--){
         if (string.charAt(i)==string.charAt(i).toUpperCase()){
            stringADevolver.unshift(string.charAt(i));
         }
      }
      for (let i=0; i<string.length; i++){
         if (string.charAt(i)!=string.charAt(i).toUpperCase()){
            stringADevolver.push(string.charAt(i));
         }
      }

   return stringADevolver.join('');


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseArray = frase.split(' ');
   var palabra;
   var fraseARetornar = "";
   for (let cont1=0; cont1<fraseArray.length; cont1++){
      palabra = fraseArray[cont1].split('').reverse().join('').toString('');
      if (cont1<fraseArray.length-1)
         fraseARetornar+= palabra + " ";
      else 
         fraseARetornar+= palabra;
   }
   return(fraseARetornar);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var numeroReverso = numero.toString().split('');
   numeroReverso=numeroReverso.reverse().join('');
   console.log(numeroReverso);

   if (numeroReverso==numero)
      return "Es capicua";
   return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringModificado="";
      for (let i=0; i<string.length; i++){
         if (string.charAt(i)==="a" ||string.charAt(i)==="b" ||string.charAt(i)==="c" 
             || string.charAt(i)==="A" ||string.charAt(i)==="B" ||string.charAt(i)==="C" )
            continue;
         stringModificado+=string.charAt(i);
      }
      return stringModificado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   for (let i=0; i<arrayOfStrings.length; i++){
      for (let j=i; j<arrayOfStrings.length; j++){
         if (arrayOfStrings[i].length>arrayOfStrings[j].length){
            var temporal= arrayOfStrings[i];
            arrayOfStrings[i]=arrayOfStrings[j];
            arrayOfStrings[j]=temporal;
         }
         else continue;
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var arrayARetornar = [];
   var contador=0;
   for (let i=0; i<array1.length;i++){
      for (let j=0; j<array2.length; j++){
         if (array1[i]==array2[j])
         arrayARetornar.push(array1[i]);
      }
   }
   return arrayARetornar;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
