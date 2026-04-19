const hamburgerBtn = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');
const btnContainer = document.querySelector('.btn-container');
hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('open');
  btnContainer.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  const isHeader = event.target.closest('header');
  console.log(event.target);
  if (!isHeader) {
    btnContainer.classList.remove('open');
    menu.classList.remove('open');
  }
});
