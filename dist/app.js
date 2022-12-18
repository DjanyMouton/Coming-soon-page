"use strict";
let input = document.querySelector('#email__input');
let btn = document.querySelector('#email__btn');
btn.addEventListener('click', () => {
    if (input.value == "") {
        console.log('Error csl');
        input.placeholder = "Error";
    }
    else {
        console.log('Great ! You will receive the email in 5 minutes');
    }
});
