
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  const inputWeight = document.querySelector('#inputWeight')
  const inputHeight = document.querySelector('#inputHeight')
  const alertError = document.querySelector('.alert-error');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const imcResult = document.querySelector('#imc-result');
  const closeButton = document.querySelector('.close');

  const IMC = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(2);
  }

  form.onsubmit = event => {
    event.preventDefault();
  
    const weight = parseFloat(inputWeight.value);
    const height = parseFloat(inputHeight.value);
  
   if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
   alertError.classList.add('hide')
    return;
   }

  alertError.classList.remove('hide');
  
  const result = IMC(weight, height);
  imcResult.textContent = `Seu IMC e de ${result}`;

  modalWrapper.classList.remove('hide');
  }

closeButton.onclick = () => {
  modalWrapper.classList.add('hide')
}

})

 


