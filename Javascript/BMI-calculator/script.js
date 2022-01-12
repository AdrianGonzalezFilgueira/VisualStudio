const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

  // Para que sirve 'preventDefault'? En este caso, para evitar que se realice la acción submit
  e.preventDefault();

  console.log("Valor del input: ", e.target.value)

  // Tu código aquí --->
  // Recogida de height y weight, asignación de valores y operación con resultado "parseado" a Integer
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  const imc = parseInt(weight / ((height * height) / 10000));
  document.querySelector("#results").textContent = imc;

  // Condicionales para resaltar el párrafo según el resultado
  if(imc < 18.6){
    $('p:nth-of-type(1)').css('color', 'red')
  }
  else if(imc >=18.6 && resultado <= 24.9){
    $('p:nth-of-type(2)').css('color', 'green')
  }
  $('p:nth-of-type(3)').css('color', 'red')
});