const currentdisplay = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number-btns')

function displayOutput() {
  const displayInput = '';
  display.value += displayInput;
}

function numberInput() {
  for (const buttons of numberBtns) {
    numberBtns.addEventListener('click', function(){
      display.value += buttons.textContent;
    })
  }
}

numberInput()

displayOutput()




