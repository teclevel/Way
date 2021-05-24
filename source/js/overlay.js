const overlay = document.createElement('div');
overlay.classList.add('overlay');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = "100%";
overlay.style.zIndex = '0';
overlay.style.backgroundColor = 'black';
overlay.style.opacity = '.5';

const showOverlay = () => {
  document.body.append(overlay);
};


const closeOverlay = () => {
  overlay.remove();
};


const onModalOpen = (popup) => {
  popup.classList.remove('visually-hidden');
  document.querySelector('body').style.overflow = 'hidden';
  showOverlay();
};

const onModalClose = (popup) => {
  popup.classList.add('visually-hidden');
  document.querySelector('body').style.overflow = '';
  closeOverlay();
};



const isEscEvent = (evt) => {
  return evt.code === 'Escape' || evt.code === 'Esc';
};

// const onModalEsc = (evt) => {
//   if (isEscEvent(evt)){
//     closeModal(buttonsBuy, popupBuy);
//     console.log('esc');
//   }
// };

const openModal = (button, popup) => {
  button.addEventListener('click', () => {onModalOpen(popup)})
  // document.addEventListener('keydown', onModalEsc);

  document.addEventListener('keydown', (e) =>{
    if (e.code == 'Escape' || e.code == 'Esc') {
      onModalClose(popup);
      console.log('esc');
    }
  });
};


const closeModal = (button, popup) => {
  button.addEventListener('click', () => {onModalClose(popup)})
  // document.removeEventListener('keydown', onModalEsc);
  document.removeEventListener('keydown', (e) =>{
    if (e.code == 'Escape' || e.code == 'Esc') {
      onModalClose(popup);
      console.log('esc');
    }
  });
};


// const onModalEsc = (evt) => {
//   if (isEscEvent(evt)){
//     closeModal();
//     // console.log('esc pushed');
//   }
// };

export {openModal, closeModal};
/*
var el = document.getElementById('div');

var handler = function(event) {
    alert(111);
    el.removeEventListener('click', handler);
};
el.addEventListener('click', handler);
*/
