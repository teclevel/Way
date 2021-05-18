import './tab.js';
import './buy.js';

const pageHeader = document.querySelector('.header');
const toggleMenu = document.querySelector('.header__toggle-menu');

// const buttonSubmit = popupBuy.querySelector('.modal-buy__submit');
// const form = popupBuy.querySelector('.modal-buy__form');
// const userTel = popupBuy.querySelector('.modal-buy__tel');
// const userEmail = popupBuy.querySelector('.modal-buy__email');




pageHeader.classList.remove('header--no-js');

toggleMenu.addEventListener('click', () => {
  if (pageHeader.classList.contains('header__open-menu')) {
    pageHeader.classList.remove('header__open-menu');
  } else {
    pageHeader.classList.add('header__open-menu');
  }
});



// let isStorageSupport = true;
// let storage = '';

// try {
//   storage = localStorage.getItem('user-name');
// } catch (err) {
//   isStorageSupport = false;
// }

// form.addEventListener('submit', (evt) => {
//   if(!userTel.value || !userEmail.value){
//     evt.preventDefault();
//     popup.offsetWidth = popup.offsetWidth;
//   } else {
//       if(isStorageSupport){
//       localStorage.setItem('user-name', userTel.value);
//       }
//     }
// });
