import './tab.js';
import './modal.js';

const pageHeader = document.querySelector('.header');
const toggleMenu = document.querySelector('.header__toggle-menu');
const linkItemMenu = document.querySelectorAll('.header__link');


pageHeader.classList.remove('header--no-js');

toggleMenu.addEventListener('click', () => {
  if (pageHeader.classList.contains('header__open-menu')) {
    pageHeader.classList.remove('header__open-menu');
  } else {
    pageHeader.classList.add('header__open-menu');
  }
});


for (let item of linkItemMenu) {
  item.addEventListener('click', () => {
    pageHeader.classList.remove('header__open-menu');
  })
};

// linkItemMenu.forEach(element => {
//   element.addEventListener('click', () => {
//     pageHeader.classList.remove('header__open-menu');

//     window.onscroll = function () {
//       return window.pageYOffset;
//     }

//     // console.log(beginPoint);//500
//     // let beginPoint;

//     // event.preventDefault();
//     // console.log(beginPoint, scrollDown);
//   });
// });





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
// // });
// const isEscEvent = (evt) => {
//   return evt.key === 'Escape' || evt.key === 'Esc';
// };

// document.addEventListener('keydown', (e) =>{
//   if (e.code == 'Escape' || e.code == 'Esc') {
//     console.log('esc');
//   }
// });
