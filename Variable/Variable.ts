var cadena = "Hola";
var numero = 5;
var verdadero = true;
var varAny: any;
var arreglo: [] = [];
var arregloObject: object = {};


var cadenaEnvltorio = new String("Adios");
var numeroEnvoltorio = new Number(10);
var verdaderoEnvoltorio = new Boolean(true);

console.log("string Primitivo: ", typeof cadena);
console.log("number primitivio: ", typeof numero);
console.log("bolean Primitivo: ", typeof verdadero);
console.log("variable Any:", typeof varAny);
console.log("array []: ", typeof arreglo);
console.log("object {}: ", typeof arregloObject);

console.log("String Envoltorio: ", typeof cadenaEnvltorio);
console.log("Number Envoltorio: ", typeof numeroEnvoltorio);
console.log("Boolean Envoltorio: ", typeof verdaderoEnvoltorio);
