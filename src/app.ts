let input = document.querySelector('#email__input') as HTMLInputElement;
let btn = document.querySelector('#email__btn') as HTMLButtonElement;
let errorText = document.querySelector('#error__div') as HTMLSpanElement;
let errorIcon = document.querySelector('#error__icon') as HTMLImageElement;

btn.addEventListener('click', () => {
    if (input.value ==  "") { 
        console.log('Error csl');
        input.style.border = "red 1px solid";
        errorText.style.display = "flex";
        errorIcon.style.display = "flex";
    } else {
            console.log('Great ! You will receive the email in 5 minutes');
            input.style.border = "1px rgb(212, 212, 212) solid";
            errorText.style.display= "none";
            errorIcon.style.display= "none";
    };
}); 


 