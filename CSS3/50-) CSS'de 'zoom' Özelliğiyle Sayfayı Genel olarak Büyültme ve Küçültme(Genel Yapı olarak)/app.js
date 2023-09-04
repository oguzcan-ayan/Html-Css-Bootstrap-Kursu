
const input = document.querySelector('input[type="range"]');

input.addEventListener("input", e => {

    console.log('e', Number(e.target.value));

    document.documentElement.style.setProperty('--zoom', Number(e.target.value))

});















