// generateNbr is variable wich stores à random number between 0 and 100
let generateNbr = Math.floor(Math.random() * 100);
// showMsg is variable wich get showMsg element in HTML page
let showMsg = document.getElementById('showMsg');
// myMsg is variable to stores the number that the player has played
var myMsg = '';
// testNbr variable is to count the number of times the player has played
let testNbr = 0;

// addNbr function get 1 setting wich get the number of the player have play and put this value on myMsg variable
function addNbr(myValue) {
    myMsg += myValue;
    // change value in the html with the myMsg value
    showMsg.value = myMsg;
}

// launch function start when the people click on "Proposer" button
function launch() {
    // This condition is to test if myMsg value is less than generateNbr
    if (myMsg < generateNbr)
        // change value in the html with the myMsg value
        showMsg.value = "C'est plus !";
    
    // This condition is to test if myMsg value is more than generateNbr
    if (myMsg > generateNbr)
        // change value in the html with the myMsg value
        showMsg.value = "C'est moins !";
    // add 1 time to testNbr value
    testNbr++;

    // This condition is to test if myMsg value is equals to generateNbr
    if (myMsg == generateNbr) {
        // change value in the html with the myMsg value
        showMsg.value = `Bien joué, en ${testNbr} coups`;
        // change the style to tryAgainBtn to show it
        document.getElementById('tryAgainBtn').style.display = "";
        // change the style to tryAgainBtn to hide it
        document.getElementById('proposeBtn').style.display = "none";
    }
    // reset value of myMsg variable and in the input in HTML
    myMsg = '';
    showMsg.innerHTML = myMsg;
}

// tryAgain function is to reload web page to restart the game
function tryAgain() {
    location.reload();
}

// This function is on "Supprimer" button and is to empty the variable
function emptyNbr() {
    showMsg.value = "";
    myMsg = '';
}