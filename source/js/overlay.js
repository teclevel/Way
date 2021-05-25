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

function showOverlay () {
  document.body.append(overlay);
};


function closeOverlay () {
  overlay.remove();
};

export {showOverlay, closeOverlay, overlay}
