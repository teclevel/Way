const tabs = document.querySelector('.countries')
const buttons = tabs.querySelectorAll('.countries__nav-link')
const items = tabs.querySelectorAll('.countries__tabs-item')


function change(arr, i) {
  arr.forEach(item => {
    item.forEach(i => {
      i.classList.remove('is-active')
    })
    item[i].classList.add('is-active')
  })
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    event.preventDefault();
    change([buttons, items], i)
  })
}
