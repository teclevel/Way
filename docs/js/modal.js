import {openModal, closeModal} from './overlay.js';

const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');


for (const button of buttonsBuy) {
  openModal(button, popupBuy);
}

closeModal(buttonClosePopupBuy, popupBuy);

// window.addEventListener('keydown', (evt) => {
//   if (evt.keyCode === 27) {
//     closeModal(buttonClosePopupBuy, popupBuy);
//   }
// });


/*
const onPopupErrorEsc = (evt) => {
  if (isEscEvent(evt)){
    closePopupError();
  }
};

const openPopupError = () => {
  popupError.classList.remove('hidden');
  buttonSubmit.toggleAttribute('disabled', true);
  document.addEventListener('keydown', onPopupErrorEsc);
};

const closePopupError = () => {
  popupError.classList.add('hidden');
  buttonSubmit.toggleAttribute('disabled', false);
  document.removeEventListener('keydown', onPopupErrorEsc);
};
*/
