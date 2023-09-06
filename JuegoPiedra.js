var partidas = parseInt(prompt("Escoja el numero de partidas que va a jugar"));
var victoriaU, victoriaCpu = 0;

do {
      var opcionUsuario = parseInt(prompt("Escoja el numero para jugar: 1 es piedra, 2 es papel, 3 es tijeras"));
      var opcionCpu = Math.random(1, 3);


      if (opcionUsuario == opcionCpu) {
            console.log("Empate")
            victoriaU = 0;
            victoriaCpu = 0;
      } else if (opcionUsuario == 1 && opcionCpu == 2) {
            console.log("Has perdido papel gana a piedra")
            victoriaCpu += 1;
            victoriaU = 0;
      } else if (opcionUsuario == 1 && opcionCpu == 3) {
            console.log("Has ganado piedra gana a tijeras")
            victoriaU += 1;
            victoriaCpu = 0;
      } else if (opcionUsuario == 2 && opcionCpu == 1) {
            console.log("Has ganado papel gana a piedra")
            victoriaU += 1;
            victoriaCpu = 0;
      } else if (opcionUsuario == 2 && opcionCpu == 3) {
            console.log("Has perdido tijeras le gana a papel")
            victoriaCpu += 1;
            victoriaU = 0;
      } else if (opcionUsuario == 3 && opcionCpu == 1) {
            console.log("Has perdido piedra gana a tijeras")
            victoriaCpu += 1;
            victoriaU = 0;
      } else if (opcionUsuario == 3 && opcionCpu == 2) {
            console.log("Has ganado tijeras le gana a papel")
            victoriaU += 1;
            victoriaCpu = 0;
      } 
      } while ( victoriaU > 2 || victoriaCpu > 2 )

