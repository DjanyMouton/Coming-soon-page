let input = document.querySelector('#email__input') as HTMLInputElement;

input.addEventListener('click', () => {
    input.placeholder = 'Tu fais quoi toiiii';
    input.style.color = 'red'; 
    console.log("ahah");
});

