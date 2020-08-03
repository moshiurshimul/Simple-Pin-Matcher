// Hiding Alert Message
    document.getElementById('pin-match').style.display = 'none';
    document.getElementById('pin-not-match').style.display = 'none';
// Generating Pin

document.getElementById('pin-btn').addEventListener('click', function() {
    let fourDigitPin = Math.floor(1000 + Math.random() * 9000);
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

// Pin Matching Function 

document.getElementById('submitBtn').addEventListener('click', function() {
    let generatedPin = document.getElementById('auto-pin').value

    if (generatedPin == "") {
        alert('Please Generate a Pin First.');
    } 
    
    if (inputNumberBox.value.length != 4 ) {
        alert('Pin must be 4 Digit');
    }
    if (generatedPin == inputNumberBox.value) {
        document.getElementById('pin-match').style.display = 'block';
    }
    if (generatedPin != inputNumberBox.value) {
        document.getElementById('pin-not-match').style.display = 'block';
    }
})

