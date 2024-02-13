function handleOpen() {
  var openMeDiv = document.querySelector('.open-me');
  openMeDiv.remove();
  var valentineCardDiv = document.querySelector('.valentine-card');
  valentineCardDiv.hidden = false;
}

function handleCatOpen() {
  var catDiv = document.querySelector('.cat-greeting');
  catDiv.remove();
  var catValentineDiv = document.querySelector('.cat-valentine-greeting');
  catValentineDiv.hidden = false;
}
