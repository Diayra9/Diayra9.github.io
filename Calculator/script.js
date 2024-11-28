let resultField = document.getElementById("result");
let historyField = document.getElementById("history");

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function clearResult() {
    resultField.value = '';
}

function calculateResult() {
    let expression = resultField.value;
    try {
        let result = eval(expression);
        historyField.innerText = expression;  // Display the history above the result
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}
