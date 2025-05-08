const currentdisplay = document.getElementById('display');
const numberBtns = document.querySelectorAll('.number-btns');




function displayOutput() {
  if(  display.value == 0) {
    display.value = 
  } else {
    display
  }
}

function numInput() {
  for (const button of numberBtns) {
    button.addEventListener('click', function(){
      displayOutput(button.textContent)
    })
  }
}

// displayOutput()










