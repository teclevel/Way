const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');


const showPopupContacts = (item, popup) => {
  item.addEventListener('click', () => {
  popup.classList.remove('visually-hidden');
  });
};

for (let i = 0; i < buttonsBuy.length; i++) {
  showPopupContacts(buttonsBuy[i], popupBuy);
}

buttonClosePopupBuy.addEventListener('click', () => {
  popupBuy.classList.add('visually-hidden');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    popupBuy.classList.add('visually-hidden');
  }
});
