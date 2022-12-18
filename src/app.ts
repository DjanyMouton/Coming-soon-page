let input = document.querySelector('#email__input') as HTMLInputElement;
let btn = document.querySelector('#email__btn') as HTMLButtonElement;

btn.addEventListener('click', () => {
    if (input.value ==  "") { 
        console.log('Error csl');
        input.placeholder = "Error";
    } else {
        console.log('Great ! You will receive the email in 5 minutes');
    }
});

 