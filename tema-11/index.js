// selectam imaginea
let gif = document.querySelector('#gif');

// imaginile pe care le vom afisa
const imagini = ['img/0.png',
                'img/1.png',
                'img/2.png',
                'img/3.png',
                'img/4.png',
                'img/5.png'];

// counter pentru a selecta o anumita imagine
let counter = 0;

// functie care mofica imaginea afisata
function changeImage() {
  // Resetam counterul daca a ajuns la 6 pentru a afisa gif-ul continuu
  if (counter === 6) {
    counter = 0;
  }
  // In functie de conter, modificam imaginea afisata, modificand sursa acesteia
  gif.setAttribute('src', imagini[counter]);
  // de fiecare cand e apelata functia, incrementam counterul
  counter++;
}

// modificam imaginea o data la 500 de milisecunde
setInterval (changeImage, 500);
