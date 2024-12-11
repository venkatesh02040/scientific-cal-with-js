function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// Convert degrees to radians (for trigonometric functions)
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function calculate(func) {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);

    if (isNaN(value)) {
        display.value = 'Error';
        return;
    }

    switch (func) {
        case 'sin':
            display.value = Math.sin(degreesToRadians(value)).toFixed(2);
            break;
        case 'cos':
            display.value = Math.cos(degreesToRadians(value)).toFixed(2);
            break;
        case 'tan':
            display.value = Math.tan(degreesToRadians(value)).toFixed(2);
            break;
        case 'sqrt':
            display.value = Math.sqrt(value).toFixed(2);
            break;
        case 'log':
            display.value = Math.log10(value).toFixed(2);
            break;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;

    // Check if expression is valid
    if (!expression || /[^0-9+\-*/.()]/.test(expression)) {
        display.value = 'Error';
        return;
    }

    try {
        // Evaluate the expression safely
        const result = Function('"use strict"; return (' + expression + ')')();
        display.value = result.toFixed(10); // Display result with 10 decimals
    } catch {
        display.value = 'Error';
    }
}

