
const items = document.querySelectorAll('.item')

console.log('Number of categories: ', items.length);

items.forEach(value => {
    console.log(`Category: ${value.firstElementChild.textContent}`);

    console.log(`Elements: ${value.lastElementChild.children.length}`); 
})