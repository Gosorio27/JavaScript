var biblioteca= [];

function agregarLibro (titulo, autor, genero, fecha){
      biblioteca.push({titulo, autor, genero, fecha});
}

agregarLibro("Javascript para noobs", "Gulfran", "suspenso", 2023);
agregarLibro("Python steam", "Carlos. A", "Terror Suspenso", 2024);
agregarLibro("Calculo III", "Rafael", "Terror Suspenso Comedia", 2024);

function printLibro (array){
      for (let i = 0; i < array.length; i++){
            console.log(array[i]);
      }
}

printLibro(biblioteca);

function searchLibro (titulo) {
      let contador= 0;
      for (let i = 0; i < biblioteca.length; i++){

            
            if (biblioteca[i].titulo.toLowerCase().includes(titulo.toLowerCase())){
                  console.log(biblioteca[i])
                  contador = 1; 
            } 

      }
      if (contador != 1) {console.log("El libro no esta zzzzzz") }

}

searchLibro("");

function contarGenero (genero){
      let contador = 0;
      for (let i = 0; i < biblioteca.length; i++){
            if ( biblioteca[i].genero.toLowerCase().includes(genero.toLowerCase())){
                  contador ++;
            }
      }
      console.log(`Hay ${contador} libros con el genero: ${genero[0].toUpperCase() + genero.slice(1).toLowerCase()}`)
}

contarGenero("terror")