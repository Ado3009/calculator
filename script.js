'use strict';

let broj1Value = document.querySelector('.broj1');
let operant = document.querySelector('.broj2');
let broj2Value = document.querySelector('.broj3');
let button = document.querySelector('button');

button.addEventListener('click', e => {
  e.preventDefault();
  if (!broj1Value.value || !broj2Value.value || !operant.value) {
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.close-modal').addEventListener('click', e => {
      document.querySelector('.pop-up').style.display = 'none';
      document.querySelector('.overlay').style.display = 'none';
    });
  }

  if (operant.value === '+') {
    let rez = parseFloat(broj1Value.value) + parseFloat(broj2Value.value);
    rezulatFuntion(rez);

    inputClear();
  } else if (operant.value === '-') {
    let rez2 = parseFloat(broj1Value.value) - parseFloat(broj2Value.value);
    rezulatFuntion(rez2);
    inputClear();
  } else if (operant.value === '*') {
    let rez3 = parseFloat(broj1Value.value) * parseFloat(broj2Value.value);
    rezulatFuntion(rez3);
    inputClear();
  } else if (operant.value === '/') {
    let rez4 = parseFloat(broj1Value.value) / parseFloat(broj2Value.value);
    rezulatFuntion(rez4);
    inputClear();
  }
});

function rezulatFuntion(e) {
  let rezultat = document.querySelector('.rezultat');
  let pTag = document.createElement('p');
  let pTagInfo = document.createElement('p');
  let newButton = document.createElement('button');
  newButton.classList = 'newButton';
  newButton.innerText = 'X';

  pTag.className = 'pTagRezlutat';
  pTagInfo.innerText = `Rezultat:`;
  pTagInfo.classList = 'pTagInfo';
  pTag.innerHTML = e;
  rezultat.style.display = 'block';
  rezultat.appendChild(pTagInfo);
  rezultat.appendChild(pTag);
  rezultat.appendChild(newButton);
  document.querySelector('.newButton').addEventListener('click', e => {
    document.querySelector('.rezultat').style.display = 'none';
    rezultat.innerHTML = '';
    pTag.innerText = '';
    pTagInfo.innerText = '';
  });
  return e;
}

function inputClear() {
  broj1Value.value = '';
  operant.value = '';
  broj2Value.value = '';
}

// for (let i = 0; i < sviInput.length; i++) {
//   sviInput[i].addEventListener('wheel', function (event) {
//     if (document.activeElement.type === 'number') {
//       document.activeElement.blur();
//     }
//   });
// }
