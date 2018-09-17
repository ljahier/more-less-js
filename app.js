let result = document.getElementById('result');
let generateNbr = Math.floor(Math.random() * 100);
let showNbr = document.getElementById('showNbr');
let myArray = '';
let testNbr = 0;

console.log(generateNbr);

function addNbr(myValue) {
    myArray += myValue;
    showNbr.innerHTML = myArray;
    console.log(myArray);
}

function launch() {
    console.log("Launch");
    if (myArray < generateNbr) {
        showNbr.innerHTML = "Plus";
        console.log("Plus");
    }

    if (myArray > generateNbr) {
        showNbr.innerHTML = "Moins";
        console.log("Moins");
    }
    testNbr++;
    if (myArray == generateNbr) {
        document.getElementById('showNbr').innerHTML = 'Bien joué, en ' + testNbr + ' coups';
        document.getElementById('tryAgainBtn').style.display = "flex";
        document.getElementById('proposer').style.display = "none";
        console.log("gg");
    }
    myArray = '';
    showNbr.innerHTML = myArray;
}

function tryAgain() {
    location.reload();
}
