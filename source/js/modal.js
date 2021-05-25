
import {showOverlay, closeOverlay, overlay} from './overlay.js'

const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');


for (const button of buttonsBuy) {
  button.addEventListener('click', onModalOpen)
}

buttonClosePopupBuy.addEventListener('click', onModalClose);


function isEscEvent(evt) {
  return evt.code === 'Escape' || evt.code === 'Esc';
};

function onModalEsc(evt) {
  if (isEscEvent(evt)) {
    onModalClose();
  }
};


function onModalOpen() {
  popupBuy.classList.remove('visually-hidden');
  document.querySelector('body').style.overflow = 'hidden';
  showOverlay();
  overlay.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalEsc);


  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const marginSize = window.innerWidth - body.clientWidth;

  if (marginSize) {
    html.style.marginRight = marginSize + 'px';
  }
};

function onModalClose() {
  popupBuy.classList.add('visually-hidden');
  document.querySelector('body').style.overflow = '';
  closeOverlay();
  document.removeEventListener('keydown', onModalEsc);
  html.style.marginRight = '';
};
