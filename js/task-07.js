const fontSize = document.querySelector('#font-size-control');

fontSize.addEventListener('input', (event) => {

    document.querySelector('#text').style = `font-size: ${fontSize.value}px`
    
})