"use strict";
const input = document.querySelector('#email__input');
const btn = document.querySelector('#email__btn');
const errorText = document.querySelector('#error__div');
const errorIcon = document.querySelector('#error__icon');
const form = document.querySelector('form');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function showError() {
    form.addEventListener('submit', (e) => {
        e.preventDefault;
        if (input.value.match(emailRegex)) {
            console.log('Reussi !');
            input.style.border = "1px rgb(212, 212, 212) solid";
            errorText.style.display = "none";
            errorIcon.style.display = "none";
            input.value = "";
        }
        else {
            console.log('Erreur !');
            input.style.border = "red 1px solid";
            errorText.style.display = "flex";
            errorIcon.style.display = "flex";
            input.value = "";
        }
    });
}
showError();
