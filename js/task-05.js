const refs = {
  input: document.querySelector('input#name-input'),
  span: document.querySelector('span#name-output')
}
console.log(refs.span);
refs.input.addEventListener('input', onInputChange)
function onInputChange(event) {
    refs.span.textContent = refs.input.value ? refs.input.value : 'незнакомец';
}