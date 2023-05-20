function Swapp() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let num3 = num1;
    num1 = num2;
    num2 = num3;

    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
}
function subtract(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
  let rslt=  eval(num1 - num2)
    document.getElementById('subtract').innerHTML= rslt;
}