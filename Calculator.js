let input = '';
let resultElement = document.getElementById('result');
AddInput = (value) => {
    input += value;
    resultElement.value = input;
}
function clearResult() {
    input = '';
    resultElement.value = '';
}
function calculate() {
    let result = eval(input);
    resultElement.value = result;
}