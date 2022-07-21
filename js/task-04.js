const counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]')

const incrementBtn = document.querySelector('button[data-action="increment"]')

counterValue.textContent = 0;


decrementBtn.addEventListener('click', () => {
    counterValue.textContent -= 1
})

incrementBtn.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1
})