const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.elements.email.value === '' || form.elements.password.value === '') {
        alert('Please, fill the full information')
    } else {
        const user = {
        login: form.elements.email.value,
        password: form.elements.password.value,
        }    

        console.log(user);

        form.reset()
    }
    
})