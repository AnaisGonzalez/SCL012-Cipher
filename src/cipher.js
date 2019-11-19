window.cipher = {

    encode: (text, number) => {
      let cipEncode = "";// Almacena las letras reemplazadas
      let valor= parseInt(number);
      for (let i = 0; i < text.length; i++) {
        // La función va recorriendo cada letra del string hasta llegar a la última.
        let txt = text.charCodeAt(i); // Aquí se traducen de letras.
let resultado= "";
        if (txt >= 65 && txt <= 90) {
          // Mayúsculas.
          
            resultado=((txt - 65 + valor) % 26) + 65
          
        } else if (txt >= 97 && txt <= 122) {
          // Minúsculas.
         resultado=((txt - 97 + valor) % 26) + 97
          
        } else if (48 <= txt && txt <= 57) {
          // Números
          resultado=((txt - 48 + valor) % 10) + 48
          
        } else {
          resultado= txt;
        }// Otro caracter.
        
        let cifrado = String.fromCharCode(resultado)


        cipEncode += cifrado;
      }
      return cipEncode; // Retorna el nuevo mensaje cifrado
    },


decode: (text, number) => {
  let cipDecode = "";// Almacena las letras reemplazadas
  let valor= parseInt(number);
 for (let i = 0; i < text.length; i++) {
        // La función va recorriendo cada letra del string hasta llegar a la última.
        let txt = text.charCodeAt(i); // Aquí se traducen de letras.
        let resultado= "";
        if (txt >= 65 && txt <= 90) {
          // Mayúsculas.
          
            resultado=((txt - 90 - valor) % 26) + 90
          
        } else if (txt >= 97 && txt <= 122) {
          // Minúsculas.
         resultado=((txt - 122 - valor) % 26) + 122
          
        } else if (48 <= txt && txt <= 57) {
          // Números
          resultado=((txt - 57 - valor) % 10) + 57
          
        } else {
          resultado= txt;
        } // Otro caracter.
        
        let cifrado = String.fromCharCode(resultado)


        cipDecode += cifrado;
      }
      return cipDecode; // Retorna el nuevo mensaje cifrado
    },

};
