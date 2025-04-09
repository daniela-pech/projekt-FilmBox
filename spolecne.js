/*
const klik = (event) => {
  event.target.classList.add('.show');
};
document.querySelector('#menu-tlacitko').addEventListener('click', klik);
*/

const tlacitko = document.querySelector('#menu-tlacitko');
const polozky = document.querySelector('#menu-polozky');
tlacitko.addEventListener('click', () => {
  polozky.classList.toggle('show');
});
