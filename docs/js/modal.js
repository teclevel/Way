
import {showOverlay, closeOverlay, overlay} from './overlay.js'

const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const elementsPopupBuy = Array.from(popupBuy.querySelectorAll('input, button'));
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');
const html = document.querySelector('html');
const marginSize = window.innerWidth - html.clientWidth;



for (const button of buttonsBuy) {
  button.addEventListener('click', onModalOpen)
};


buttonClosePopupBuy.addEventListener('click', onModalClose);


function isEscEvent(evt) {
  return evt.code === 'Escape' || evt.code === 'Esc';
};


function onModalEsc(evt) {
  if (isEscEvent(evt)) {
    onModalClose();
  }
};


function onModalTab(evt) {
  const focusedItemIndex = elementsPopupBuy.indexOf(document.activeElement)

  if (evt.shiftKey && focusedItemIndex === 0) {
    elementsPopupBuy[elementsPopupBuy.length - 1].focus();
    evt.preventDefault();
  }

  if (!evt.shiftKey && focusedItemIndex === elementsPopupBuy.length - 1) {
    elementsPopupBuy[0].focus();
    evt.preventDefault();
  }
};


function onModalOpen() {
  popupBuy.classList.remove('visually-hidden');
  document.querySelector('body').style.overflow = 'hidden';
  showOverlay();
  overlay.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onModalEsc);

  if (marginSize) {
    html.style.marginRight = marginSize + 'px';
  }

  elementsPopupBuy[0].focus();
  document.addEventListener('keydown', onModalTab);
};


function onModalClose() {
  popupBuy.classList.add('visually-hidden');
  document.querySelector('body').style.overflow = '';
  closeOverlay();
  document.removeEventListener('keydown', onModalEsc);
  html.style.marginRight = '';

  document.removeEventListener('keydown', onModalTab);
};
