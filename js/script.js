// array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const immagini_piccole = document.getElementById('immagini-piccole');

for(let i=0; i < items.length; i++){
    if(i==0){
        immagini_piccole.innerHTML += `
        <div class="immagine-piccola selezionata">
            <img src=${items[i]} alt="..">
        </div>`;
    }
    else{
        immagini_piccole.innerHTML += `
        <div class="immagine-piccola">
            <img src=${items[i]} alt="..">
        </div>`;
    }
}

const immagine_principale = document.getElementById('immagine');

immagine_principale.innerHTML += `<img src=${items[0]} alt="..">`  

const scritta = document.getElementById('scritta');
const luogo = document.getElementById('luogo');
const desc = document.getElementById('desc');

scritta.innerHTML += `
<span id="luogo">${title[0]}</span>
<span id="desc">${text[0]}</span>`;

const freccia_su = document.getElementById('freccia-su');
const freccia_giu = document.getElementById('freccia-giu');
const immagine_piccola = document.getElementsByClassName('immagine-piccola');
let immagine_corrente = 0;

freccia_su.addEventListener('click', function(){
    immagine_piccola[immagine_corrente].classList.remove('selezionata');
    if(immagine_corrente != 0)immagine_corrente --;
    else immagine_corrente = 4;
    immagine_principale.innerHTML = `<img src=${items[immagine_corrente]} alt="..">`
    scritta.innerHTML = `
    <span id="luogo">${title[immagine_corrente]}</span>
    <span id="desc">${text[immagine_corrente]}</span>`
    immagine_piccola[immagine_corrente].classList.add('selezionata');
});

freccia_giu.addEventListener('click', function(){
    immagine_piccola[immagine_corrente].classList.remove('selezionata');
    if(immagine_corrente != 4)immagine_corrente ++;
    else immagine_corrente = 0;
    immagine_principale.innerHTML = `<img src=${items[immagine_corrente]} alt="..">`
    scritta.innerHTML = `
    <span id="luogo">${title[immagine_corrente]}</span>
    <span id="desc">${text[immagine_corrente]}</span>`
    immagine_piccola[immagine_corrente].classList.add('selezionata');
});
