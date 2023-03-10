function add(a,b){
    return a + b
}

function subtract(a, b){
    return a - b 
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function increment(n){
    return n + 1
}

function decrement(n){
    return n - 1
}

function makeInt(n) {
    let parsedInt = parseInt(n, 10);
    return isNaN(parsedInt) ? NaN : parsedInt;
  }
  
function preserveDecimal(n) {
    return parseFloat(n);
}
    