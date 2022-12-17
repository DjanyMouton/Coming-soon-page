let input = document.querySelector('#input') as HTMLInputElement;
let para = document.querySelector('#para') as HTMLElement;

input.addEventListener('keyup', () => {
    para.style.color = "Blue"
    para.textContent = input.value;
})

