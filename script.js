let getWord = document.getElementById('p-word');
let submitBtn = document.getElementById('p-btn');
let restartBtn = document.getElementById('r-btn');
let trueValidation = document.getElementById('true-validation');
let falseValidation = document.getElementById('false-validation');

// Evento al dar clic al submit

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let word = palindromeWord(getWord.value);
    
    if (word == true) {
        trueValidation.classList.remove("textValidation")
    } else {
        falseValidation.classList.remove("textValidation")
    }
});

// Reinicia la pantalla del juego 

restartBtn.addEventListener("click", (e) => {
    alert("Play again!")
});

// Tomar las letras de la palabra

function palindromeWord(string) {
    let wordValidation = /[\W_]/g;
    let lowCaseString = string.toLowerCase().replace(wordValidation, '');
    let reverseString = lowCaseString.split('').reverse().join('');
    return reverseString === lowCaseString;
}
