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
    if (myMsg < generateNbr)
        showMsg.value = "C'est plus !";

    if (myMsg > generateNbr)
        showMsg.value = "C'est moins !";

    testNbr++;
    
    if (myMsg == generateNbr) {
        showMsg.value = `Bien joué, en ${testNbr} coups`;
        document.getElementById('tryAgainBtn').style.display = "";
        document.getElementById('proposeBtn').style.display = "none";
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