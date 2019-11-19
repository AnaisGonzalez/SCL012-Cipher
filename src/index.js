window.onload = function() {

// Botón Cifrar
  const btnC = document.getElementById("btnC"); // Llama al botón
  btnC.addEventListener("click", () => {
    // Al presionar click al botón
    let text = document.getElementById("sourceText").value; // Se guarda el valor de "sourceText" en la variable "text".
    let number = document.getElementById("positionNumber").value; // Se guarda el valor de "positionNumber" en la variable "number".
    window.cipher.encode(text,number); // Se mandan los valores obtenidos a la función encode.
    document.getElementById("finalText").innerHTML = window.cipher.encode(text,number);

  });


  // Botón Descifrar
    const btnD = document.getElementById("btnD"); // Llama al botón
    btnD.addEventListener("click", () => {
      // Al presionar click al botón
      let text = document.getElementById("sourceText").value; // Se guarda el valor de "sourceText" en la variable "text".
      let number = document.getElementById("positionNumber").value; // Se guarda el valor de "positionNumber" en la variable "number".
      window.cipher.decode(text,number); // Se mandan los valores obtenidos a la función decode.
      document.getElementById("finalText").innerHTML = window.cipher.decode(text,number);
    });


  //Botón Limpiar
    const btnL = document.getElementById("btnL"); // Llama al botón
    btnL.addEventListener("click", () => {
      // Al presionar click al botón
      document.getElementById("sourceText").value = ""; // Se le agrega valor "vacio""
      document.getElementById("finalText").innerHTML = ""; // Se le agrega valor "vacio""
});
};
