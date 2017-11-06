function complexical(){

let showIt = [];//container for the sequence

let startLoop = function(n) {
    var num1 = 0, num2 = 1, sum1 = 1;
    for(var i = 1; i <= n; i++) {
        sum1 = num1 + num2; //first action
        num1 = num2; //second action
        num2 = sum1; //third action, then restarts loop with this result and new values
  showIt.push(sum1);//pushes the answer of each loop iteration into the showIt array
    }
    return sum1;
};


let printedArray = (startLoop(document.getElementById("summly").value));//finds the input, uses the value to feed the loop

document.getElementById("showMe").innerHTML = printedArray;//shows the requested sum

document.getElementById("letMeSee").innerHTML = showIt;//shows entire sequence in document
}