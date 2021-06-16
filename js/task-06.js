const refs = {
  input: document.querySelector('[data-length]')
}

const dataLength = +refs.input.dataset.length;
console.log(dataLength);
refs.input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
  if (refs.input.value.length === dataLength) {
    updateClass('valid', 'invalid')
  } else {
    updateClass('invalid', 'valid')
   }
}

function updateClass(add, rem) {
  refs.input.classList.add(add)
  refs.input.classList.remove(rem)
}