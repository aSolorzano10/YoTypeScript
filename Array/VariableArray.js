var nombres = ['Alfredo', 'Laura', 'Danna', 'Juan', 'Petrona', 'Raúl', 'Fernando', 'Norma'];
console.log();
console.log("Print Data with ForEach");
nombres.forEach(function (nombre) {
    console.log(nombre);
});
console.log();
console.log("Print Data with Matriz For");
for (var i in nombres) {
    console.log(nombres[i]);
}
console.log();
console.log("Print Data with Traditional For");
for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
