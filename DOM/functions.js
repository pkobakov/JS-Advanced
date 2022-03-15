function calculate(){
    let firstNumberElement = document.getElementById('first-number');
    let secondNumberElement = document.getElementById('second-number');

    let firstNumber = Number(firstNumberElement.value);
    let secondNumber = Number(secondNumberElement.value);

    let sum = firstNumber + secondNumber;
    let resultElement = document.getElementById('sum');
    resultElement.value = sum;
}

function showText(){
    let textElement = document.getElementById('more');
    textElement.style.display = 'none';

    let moreElement = document.getElementById('text');
    moreElement.style.display = 'inline';
}

function addMovie(){
    let ulElement = document.getElementById('movie-list');
    let newLiElement = document.createElement('li');
    
    newLiElement.textContent = 'The Godfather';

    let copyElement = newLiElement.cloneNode(true);
    copyElement.textContent = 'Spiderman';

    ulElement.appendChild(newLiElement);
    ulElement.appendChild(copyElement);
}



