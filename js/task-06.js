const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', (event) => {

    textInput.value.length === Number(textInput.dataset.length) ?
        textInput.className = 'valid' :
        textInput.className = 'invalid';
})

