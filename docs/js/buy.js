const pageBody = document.querySelector('.page-body')
const buttonsBuy = document.querySelectorAll('.button-buy');
const popupBuy = document.querySelector('.modal-buy');
const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');


for (const button of buttonsBuy) {
  button.addEventListener('click', () => {
    popupBuy.classList.remove('visually-hidden');
    pageBody.style.overflow = 'hidden';
  })
}


buttonClosePopupBuy.addEventListener('click', () => {
  popupBuy.classList.add('visually-hidden');
  pageBody.style.overflow = 'scroll';
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    popupBuy.classList.add('visually-hidden');
  }
});

popupBuy.addEventListener('click', () => {
  popupBuy.classList.add('visually-hidden');
})
