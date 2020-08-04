// Hiding Alert Message
    document.getElementById('pin-match').style.display = 'none';
    document.getElementById('pin-not-match').style.display = 'none';

// Generating 4 Digit Rendom Pin
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
    let generatedPin = document.getElementById('auto-pin').value;

    if (generatedPin == "") {
        inputNumberBox.value = '';
        return alert('Please Generate a Pin First.');
    }
    
    if (inputNumberBox.value.length != 4 ) {
        inputNumberBox.value = '';
        return alert('Pin must be 4 Digit');

    }

    if (generatedPin == inputNumberBox.value) {
        document.getElementById('pin-match').style.display = 'block';
        document.getElementById('pin-not-match').style.display = 'none';
    }

    if (generatedPin != inputNumberBox.value) {
        document.getElementById('pin-not-match').style.display = 'block';
        document.getElementById('pin-match').style.display = 'none';
        
        
        // Disableing Submit Button
        let chanceLeft = document.getElementById('chance-left').innerText;
        let chanceLeftNumber = parseInt(chanceLeft);
        
        let currentChance = chanceLeftNumber - 1;
        document.getElementById('chance-left').innerText = currentChance;
        if(currentChance == 0) {
            document.getElementById('submitBtn').disabled = 'true';
        }
    }
});

