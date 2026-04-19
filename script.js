const hamburgerBtn = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');
hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  const isHeader = event.target.closest('header');
  console.log(event.target);
  if (!isHeader) {
    menu.classList.remove('open');
  }
});
