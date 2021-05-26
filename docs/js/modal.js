
import {showOverlay, closeOverlay, overlay} from './overlay.js'

const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const elementsPopupBuy = popupBuy.querySelectorAll('input, button');
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');
const html = document.querySelector('html');
const body = document.querySelector('body');
const tabs = body.querySelectorAll('*');

const marginSize = html.offsetWidth - body.clientWidth;



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

function onModalTab(evt) {
  for (const element of elementsPopupBuy){
    if (evt.keyCode === 9) {
      console.log('tab');
      // element.setAttribute('tabIndex', '0');
      element.focus();
    }
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

  // for (const tab of tabs){
  //   tab.setAttribute('tabIndex', '-1');
  // }

  for (const tab of elementsPopupBuy){
    tab.setAttribute('tabIndex', '0');
  }

  popupBuy.querySelector('input[type="tel"]').focus();
  document.addEventListener('keydown', onModalTab);
};

function onModalClose() {
  popupBuy.classList.add('visually-hidden');
  document.querySelector('body').style.overflow = '';
  closeOverlay();
  document.removeEventListener('keydown', onModalEsc);
  html.style.marginRight = '';

  for (const tab of tabs){
    tab.removeAttribute('tabIndex');
  }

  // for (const tab of elementsPopupBuy){
  //   tab.setAttribute('tabIndex','-1');
  // }
  document.removeEventListener('keydown', onModalTab);
};

    // function uniKeyCode(event, element) {
    //   const key = event.keyCode;
    //   if (key == 9) {
    //     console.log("Unicode KEY code: " + key + " TAB Element: " + element);
    //     document.getElementById(element).focus();
    //     return false;
    //   }
    // }

// <body>
//   <input id="input" onkeydown="return(uniKeyCode(event,'textarea')); "><br />
//   <textarea id="textarea" onkeydown="return(uniKeyCode(event,'input')); "></textarea><br />
// </body>
