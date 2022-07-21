function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// links

const input = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const box = document.querySelector('#boxes')

// Control

createBtn.addEventListener('click', (event) => {
  let str = '';

  for (let i = 0; i < Number(input.value); i += 1) {
     str += `<div class='box--color' style='width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()}'></div>`;
  }
  
  box.innerHTML = str;
})

destroyBtn.addEventListener('click', (event) => {
  box.innerHTML = '';
})