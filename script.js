window.onload = function() {
    carta1.classList.add('presentation');
    carta2.classList.add('presentation');
    carta3.classList.add('presentation');
    carta4.classList.add('presentation');
}

let carta1 = document.querySelector('.carta1');
carta1.addEventListener('click', function () { 
carta1.classList.toggle('scopriCarta');} );

let carta2 = document.querySelector('.carta2');
carta2.addEventListener('click', function () { 
carta2.classList.toggle('scopriCarta');} );

let carta3 = document.querySelector('.carta3');
carta3.addEventListener('click', function () { 
carta3.classList.toggle('scopriCarta');} );

let carta4 = document.querySelector('.carta4');
carta4.addEventListener('click', function () { 
carta4.classList.toggle('scopriCarta');} );

let bottone = document.querySelector('.bottone');
let titolo = document.querySelector('h1');
let titolo2 = document.querySelector('h2');
let nogioca = document.querySelector('.no-gioca');
let bottoneDisabilita = document.querySelector('.bottoneDisabilitato');
let bottoneRiavvia = document.querySelector('.bottone2');
let vincitore = document.querySelector('.counter-label');
let perdente = document.querySelector('.counter-label');
let newgame = document.querySelector('.textNewGame');
bottone.addEventListener ('click', function () { 
    titolo.classList.add('animaTitle');
    titolo2.classList.add('opacity-on');
    nogioca.classList.remove('disabilita');
    nogioca.classList.add('removeBlock');
    nogioca.innerHTML = "";
    carta1.classList.remove('presentation');
    carta2.classList.remove('presentation');
    carta3.classList.remove('presentation');
    carta4.classList.remove('presentation');
    carta1.classList.toggle('avvia1');
    carta2.classList.toggle('avvia2');
    carta3.classList.toggle('avvia3');
    carta4.classList.toggle('avvia4');
    bottone.innerHTML = "Cliccare 2 volte per mischiare";
    function mescola (carte) {
        let mescola = carte.sort(function(){
            return Math.random() - 0.5;
        })
        return mescola;
    }
    let carta = ['url(carte/asso_denari.png)', 'url(carte/asso_coppe.png)', 'url(carte/asso_bastoni.png)', 'url(carte/asso_spade.png)'];
    let rand = mescola (carta);
    console.log("Il risultato è" + rand);
    console.log("Il primo risultato è" + rand[0]);
    let cartaSfondo1 = document.querySelector('.carta_faccia--back1');
    let cartaSfondo2 = document.querySelector('.carta_faccia--back2');
    let cartaSfondo3 = document.querySelector('.carta_faccia--back3');
    let cartaSfondo4 = document.querySelector('.carta_faccia--back4');
    let scena = document.querySelector('.scena');
    cartaSfondo1.style.setProperty("--background1",rand[0]);
    cartaSfondo2.style.setProperty("--background2",rand[1]);
    cartaSfondo3.style.setProperty("--background3",rand[2]);
    cartaSfondo4.style.setProperty("--background4",rand[3]);
    carta1.id = rand [0];
    carta2.id = rand [1];
    carta3.id = rand [2];
    carta4.id = rand [3];


let vittoria = 'url(carte/asso_denari.png)';

let counter = 2;

function clickCarta1() {
    if(carta1.id !== vittoria){
    incrementClick();
    let errore = document.createElement("div");
    let classe = document.createAttribute("class");
    cartaSfondo1.appendChild(errore);
    classe.value = "errore";
    errore.setAttributeNode(classe);
    bottone.innerHTML = "Non Puoi Più Mischiare le Carte!";
    bottone.classList.add('bottoneDisabilitato');
    let disabCarta = document.createElement("div");
    let miaClass = document.createAttribute("class");
    scena.appendChild(disabCarta);
    miaClass.value = "disab1";
    disabCarta.setAttributeNode(miaClass);
    if (counter == 0) {
        perdente();
    }
    }else{
        vincita();
    }
}

function clickCarta2() {
    if(carta2.id !== vittoria){
    incrementClick();
    let errore = document.createElement("div");
    let classe = document.createAttribute("class");
    cartaSfondo2.appendChild(errore);
    classe.value = "errore";
    errore.setAttributeNode(classe);
    bottone.innerHTML = "Non Puoi Più Mischiare le Carte!";
    bottone.classList.add('bottoneDisabilitato');
    let disabCarta = document.createElement("div");
    let miaClass = document.createAttribute("class");
    scena.appendChild(disabCarta);
    miaClass.value = "disab2";
    disabCarta.setAttributeNode(miaClass);
    if (counter == 0) {
        perdente();
    }
    }else{
        vincita();
    }
}

function clickCarta3() {
    if(carta3.id !== vittoria){
    incrementClick();
    let errore = document.createElement("div");
    let classe = document.createAttribute("class");
    cartaSfondo3.appendChild(errore);
    classe.value = "errore";
    errore.setAttributeNode(classe);
    bottone.innerHTML = "Non Puoi Più Mischiare le Carte!";
    bottone.classList.add('bottoneDisabilitato');
    let disabCarta = document.createElement("div");
    let miaClass = document.createAttribute("class");
    scena.appendChild(disabCarta);
    miaClass.value = "disab3";
    disabCarta.setAttributeNode(miaClass);
    if (counter == 0) {
        perdente();
    }
    }else{
        vincita();
    }
}

function clickCarta4() {
    if(carta4.id !== vittoria){
    incrementClick();
    let errore = document.createElement("div");
    let classe = document.createAttribute("class");
    cartaSfondo4.appendChild(errore);
    classe.value = "errore";
    errore.setAttributeNode(classe);
    bottone.innerHTML = "Non Puoi Più Mischiare le Carte!";
    bottone.classList.add('bottoneDisabilitato');
    let disabCarta = document.createElement("div");
    let miaClass = document.createAttribute("class");
    scena.appendChild(disabCarta);
    miaClass.value = "disab4";
    disabCarta.setAttributeNode(miaClass);
    if (counter == 0) {
        perdente();
    }
    }else{
        vincita();
    }
}
carta1.onclick = clickCarta1;
carta2.onclick = clickCarta2;
carta3.onclick = clickCarta3;
carta4.onclick = clickCarta4;

bottoneRiavvia.addEventListener('click',function(){
    window.location.reload();
});

function vincita() {
    document.getElementById("counter-label").innerHTML="HAI VINTO!";
    vincitore.classList.add('vincitore');
    nogioca.classList.add('disabilitaEnd');
    nogioca.classList.remove('removeBlock');
    bottoneRiavvia.classList.add('bottoneRivviaEnd');
}

function incrementClick() {
    updateDisplay(--counter);
}

function updateDisplay() {
    if(counter == 1){
        document.getElementById("counter-label").innerHTML="Hai "+ counter + " tentativo a disposizione!";
    }
    if(counter == 0) {
        document.getElementById("counter-label").innerHTML="Hai "+ counter + " tentativo a disposizione!";
    }
    return;
}

function sconfitta() {
    document.getElementById("counter-label").innerHTML="HAI PERSO!";
    perdente.classList.add('perdente');
    nogioca.classList.add('disabilitaEnd');
    nogioca.classList.remove('removeBlock');
    bottoneRiavvia.classList.add('bottoneRivviaEnd');
}

} );