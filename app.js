let result = document.getElementById('result');
let generateNbr = Math.floor(Math.random() * 100);
let showMsg = document.getElementById('showMsg');
var myMsg = '';
let testNbr = 0;

function addNbr(myValue) {
    myMsg += myValue;
    showMsg.value = myMsg;
}

function launch() {
    console.log("Launch");
    if (myMsg < generateNbr) {
        showMsg.value = "C'est plus !"
        console.log("Plus");
    }

    if (myMsg > generateNbr) {
        showMsg.value = "C'est moins !"
        console.log("Moins");
    }
    testNbr++;
    if (myMsg == generateNbr) {
        showMsg.value = `Bien joué, en ${testNbr} coups`;
        document.getElementById('tryAgainBtn').style.display = "";
        document.getElementById('proposeBtn').style.display = "none";
        console.log("gg");
    }
    myMsg = '';
    showMsg.innerHTML = myMsg;
}

function tryAgain() {
    location.reload();
}

function emptyNbr() {
    showMsg.value = "";
    myMsg = '';
}