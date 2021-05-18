// const itemsSlider = document.querySelectorAll('.countries__nav-link');
// const cardsSlider = document.querySelectorAll('.countries__tabs-item');
// const itemsMenu = Array.from(itemsSlider);
// const itemsCards = Array.from(cardsSlider);

// const switchOffCard = (cards) => {
//   for (let i = 0; i < cards.length; i++) {
//     const cardOff = cards[i].classList.contains('visually-hidden');
//     if(!cardOff){
//       cards[i].classList.add('visually-hidden');
//     }
//   }
// }

// const switchOffMenu = (cards) => {
//   for (let i = 0; i < cards.length; i++) {
//     const menuOn = cards[i].classList.contains('countries__nav-link--current');
//     if(menuOn){
//       cards[i].classList.remove('countries__nav-link--current');
//     }
//   }
// }

// const showCardCountry = (item, card) => {
//   item.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     const currentMenuOn = item.classList.contains('countries__nav-link--current');
//     if(currentMenuOn){
//       switchOffCard(itemsCards);
//       item.classList.remove('countries__nav-link--current');
//     } else {
//       switchOffMenu(itemsMenu)
//       switchOffCard(itemsCards);
//       item.classList.add('countries__nav-link--current');
//       card.classList.remove('visually-hidden');
//     }
//   });
// };

// for (let i = 0; i < itemsSlider.length; i++) {
//   showCardCountry(itemsSlider[i], cardsSlider[i]);
// }

let tabs = document.querySelector('.countries')
let buttons = tabs.querySelectorAll('.countries__nav-link')
let items = tabs.querySelectorAll('.countries__tabs-item')

console.log(tabs);
console.log(buttons);
console.log(items);

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
    change([buttons, items], i)
  })
}
