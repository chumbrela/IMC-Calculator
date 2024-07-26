/*
calculando o imc - logica

solicitar o peso do usuario // input weight
solicitar a altura do usuario // input height

validar se o valor inserido e valido. 
se nao for dispara um alert-error "digite um valor correto"

se os numeros forem validos executo o calculo do IMC // function calcIMC()

retorna o resultado impresso na tela para usuario com a seguinte frase:
seu imc e de ${imc}.
*/

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

 
} 
IMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}