// Generating Pin

document.getElementById('pin-btn').addEventListener('click', function() {
    let fourDigitPin = Math.floor(1000 + Math.random() * 9000);
    console.log(fourDigitPin);

    document.getElementById('auto-pin').value = fourDigitPin;
})