"use strict";
let input = document.querySelector('#input');
let para = document.querySelector('#para');
input.addEventListener('keyup', () => {
    para.style.color = "Blue";
    para.textContent = input.value;
});
