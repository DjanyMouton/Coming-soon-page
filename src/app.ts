const input = document.querySelector('#email__input') as HTMLInputElement;
const btn = document.querySelector('#email__btn') as HTMLButtonElement;
const errorText = document.querySelector('#error__div') as HTMLSpanElement;
const errorIcon = document.querySelector('#error__icon') as HTMLImageElement;
const form = document.querySelector('form') as HTMLFormElement;
const emailRegex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function showError() {
    form.addEventListener('submit', (e) => {
        e.preventDefault;
        if(input.value.match(emailRegex)) {
            console.log('Reussi !');
            input.style.border = "1px rgb(212, 212, 212) solid";
            errorText.style.display= "none";
            errorIcon.style.display= "none";
            input.value = "";
        } else {
            console.log('Erreur !');
            input.style.border = "red 1px solid";
            errorText.style.display = "flex";
            errorIcon.style.display = "flex";
            input.value = "";
        }
    })
}

showError();