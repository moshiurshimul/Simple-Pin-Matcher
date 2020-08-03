// Generating Pin

document.getElementById('pin-btn').addEventListener('click', function() {
    let fourDigitPin = Math.floor(1000 + Math.random() * 9000);
    console.log(fourDigitPin);

    document.getElementById('auto-pin').value = fourDigitPin;
});

// Number Input Function 

let inputNumberBox = document.getElementById('input-number');

function inputNumber(number){
    inputNumberBox.value += number;
}

// C Button Function

function clearAll() {
    inputNumberBox.value = '';
}


// Back Button Function

function backBtn() {
    currentNumbers = inputNumberBox.value;
    inputNumberBox.value = currentNumbers.slice(0, -1);
}

