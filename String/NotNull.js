function notNullFunction(cadena) {
    return cadena != null && cadena != "";
}
var notNull = function (cadena) {
    return cadena != null && cadena != "";
};
console.log("Function Cadena Vacia: ", notNullFunction(""));
console.log("Function Cadena No Vacia: ", notNullFunction("Hola"));
console.log("Arrow Function Cadena Vacia: ", notNull(""));
console.log("Arrow Function Cadena No Vacia: ", notNull("Hola"));
