
var canPlatos = parseInt(prompt("Ingesa el numero de platos que consumiste"));
var verificacion = parseInt(prompt("vas a pagar propina?"));
var valorPlato;
var cuenta = 0;

for (i = 1; i <= canPlatos; i++) {
      valorPlato = parseInt(prompt("Ingrese el valor del " + i + " plato"));
      cuenta += valorPlato;
}

if (verificacion === "si") {
      var porcentaje = parseInt(prompt("Ingrese porcentaje de propina a pagar"));
      console.log(`Su cuenta da un total de $${cuenta} y la propina es de $${cuenta*(propina/100)}`)
} else {
      console.log(`Su cuenta da un total de $${cuenta} y la propina es $0` );
}