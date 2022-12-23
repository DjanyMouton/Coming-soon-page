let input = document.querySelector('#email__input') as HTMLInputElement;
let btn = document.querySelector('#email__btn') as HTMLButtonElement;
let errorText = document.querySelector('#error__div') as HTMLSpanElement;
let emailCheckRegex = new RegExp (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

btn.addEventListener('click', () => {
    if (input.value ==  "" || emailCheckRegex.test(input.value) == true) { 
        console.log('Error csl');
        input.style.border = "red 1px solid"
        errorText.style.display= "flex"
    } else {
        // Je veux que quand j'écris après une erreur la border redeviens normal et que le span (error) disparaisse
        input.addEventListener('keyup', () => {
            console.log('Great ! You will receive the email in 5 minutes');
            input.style.border = "1px rgb(212, 212, 212) solid"
            errorText.style.display= "none"
        })
    }
}); 


 