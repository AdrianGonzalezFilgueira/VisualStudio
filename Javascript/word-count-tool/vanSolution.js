// Código aquí

// 1. Recuperar el botón del DOM
let botonCalcular = document.querySelector("#btn");


// 2. Asociar un evento onClick()
botonCalcular.addEventListener("click", () => {
    let texto = document.querySelector("#str").value;
    let numCaracteres = texto.length;
    document.querySelector("#output").textContent = numCaracteres;
});
