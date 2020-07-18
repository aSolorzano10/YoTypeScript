let addition = (number1: number, number2: number ): number =>{
  return number1 + number2;
}

let substraction = (number1: number, number2: number): number =>{
  return number1 - number2;
}

let multiplication = (number1: number, number2: number): number =>{
  return number1 * number2;
}


let division = (number1: number, number2: number): number =>{
  return number1 / number2;
}

console.log("Addition (5 + 5): ", addition(5, 5));
console.log("Substraction (8 - 3): ", substraction(8, 3));
console.log("Multiplication (3 * 3): ", multiplication(3, 3));
console.log("Division (10 / 2): ", division(10, 2));
