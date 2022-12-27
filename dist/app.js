"use strict";
const input = document.querySelector('#email__input');
const btn = document.querySelector('#email__btn');
const form = document.querySelector('form');
const errorText = document.querySelector('#error__div');
const errorIcon = document.querySelector('#error__icon');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Function than check if the mail adress is valid or not
function emailVerification() {
    btn.addEventListener('click', (e) => {
        e.preventDefault;
        if (input.value.match(emailRegex)) {
            input.style.border = "1px rgb(212, 212, 212) solid";
            errorText.style.display = "none";
            errorIcon.style.display = "none";
            input.value = "";
            window.alert("Great! You will receive an email in a few seconds!");
        }
        else {
            console.log('Erreur !');
            input.style.border = "red 1px solid";
            errorText.style.display = "flex";
            errorIcon.style.display = "flex";
            input.value = "";
        }
        ;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault;
        if (input.value.match(emailRegex)) {
            console.log('Reussi !');
            input.style.border = "1px rgb(212, 212, 212) solid";
            errorText.style.display = "none";
            errorIcon.style.display = "none";
            input.value = "";
            window.alert("Great! You will receive an email in few seconds!");
        }
        else {
            console.log('Erreur !');
            input.style.border = "red 1px solid";
            errorText.style.display = "flex";
            errorIcon.style.display = "flex";
            input.value = "";
        }
        ;
    });
}
;
emailVerification();
