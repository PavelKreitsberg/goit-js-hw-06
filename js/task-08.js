const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        login: form.elements.email.value,
        password: form.elements.password.value,
    }

    if (user.login === '' || user.password === '') {
        alert('Please, fill the full information')
    }

    console.log(user);

    form.reset()
})