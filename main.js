const btnPlus = document.querySelector('.btn1')
const btnMinus = document.querySelector('.btn2')
const spanText = document.querySelector('.text')

let num = 0;

btnPlus.addEventListener('click', () => {
  num++;
  spanText.textContent = num;
});

btnMinus.addEventListener('click', () => {
    num--;
  spanText.textContent = num;
})