// switcher.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.color-box');
  const body = document.querySelector('body');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      body.style.backgroundColor = e.target.id;
    });
  });
});
