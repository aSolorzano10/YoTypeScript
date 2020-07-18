function notNullFunction(cadena: string): boolean {
  return cadena != null && cadena != "";
}

let notNull = (cadena: string): boolean => {
  return cadena != null && cadena != "";
}

console.log("Function Cadena Vacia: ", notNullFunction(""));
console.log("Function Cadena No Vacia: ", notNullFunction("Hola"));

console.log("Arrow Function Cadena Vacia: ", notNull(""));
console.log("Arrow Function Cadena No Vacia: ", notNull("Hola"));
