/////////////////////////////////////////////////////////////////////
// CONSTANTES DE BASE//////////////////
/////////////////////////////////////////////////////////////////////
let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxs = document.querySelectorAll('.case');
const destroy = document.querySelector('.destroy');
const allCases = [];
const choix = [];
let photoEnCours;

/////////////////////////////////////////////////////////////////////
// INSERTION DE PHOTOS//////////////////
/////////////////////////////////////////////////////////////////////
for(i = 0; i < boxs.length; i++){
    allCases.push(boxs[i]);
}
allCases.push(destroy);

let indexPhoto = 1;

/////////////////////////////////////////////////////////////////////
// RECUPERATION DE PHOTO EN LIGNE//////////////////
/////////////////////////////////////////////////////////////////////
base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
photoEnCours =  `url(https://loremflickr.com/320/240?random=${indexPhoto})`;

/////////////////////////////////////////////////////////////////////
// INSERTION D4UNE NOUVELLE PHOTO AU HASARD//////////////////
/////////////////////////////////////////////////////////////////////
function nvBase(){

    const newBase = document.createElement('div');
    newBase.setAttribute('class', 'base');
    newBase.setAttribute('draggable', 'true');
    indexPhoto++;
    newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`
    photoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
    premiereCase.appendChild(newBase);
    base = newBase;

}

/////////////////////////////////////////////////////////////////////
// DEPLACEMENT DE PHOTOS//////////////////
/////////////////////////////////////////////////////////////////////
for(const vide of allCases) {

    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);

}




function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}

/////////////////////////////////////////////////////////////////////
// DEPLACER LA PHOTO, LA RECLACHER, DESTRUCTION DU BLOCK INITIIAL //////////////////
/////////////////////////////////////////////////////////////////////
function dragDrop(){

    if(this.id === "premiere-case"){
        return;
    }
    console.log(this.id === "destroy");
    // destroy
    if(this.id === "destroy") {
        base.remove();
        nvBase();
        return;
    }

/////////////////////////////////////////////////////////////////////
//VERROUILLAGE DE LA PHOTO UNE FOIS DEPLACEE//////////////////
/////////////////////////////////////////////////////////////////////

    this.removeEventListener('drop', dragDrop);
    this.removeEventListener('dragenter', dragEnter);
    this.removeEventListener('dragover', dragOver);

    this.appendChild(base);
    this.childNodes[0].setAttribute('draggable', false);
    nvBase();

    choix.push(photoEnCours);
    if(choix.length === 3){
        setTimeout(() => {
            alert('Sélection terminée !')
        }, 200)
    }

}