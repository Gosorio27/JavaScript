let contactos = [];

function agregarContactos(nombre, telefono, email){
    contactos.push({nombre, telefono, email})
}

agregarContactos("gustavo", "3046097319", "gosorio@gmail.com");
agregarContactos("alejandra", "3046097483", "ale@gmail.com");
agregarContactos("valeria", "3206097319", "vale@gmail.com");

function mostrarContactos (array){
  for(let i = 0; i<array.length; i++){
    console.log(array[i]);
  }
}


function buscarContacto(nombre){
  let verificador = 0;
    for(let i = 0; i < contactos.length; i++){
      if (contactos[i].nombre.toLowerCase().includes(nombre.toLowerCase())){
        console.log(contactos[i]);
        verificador = 1;
        
      }
     
    }
  if (verificador != 1){
    console.log("El contacto no existe.")}
}






function eliminarContacto(nombre){
  let verificador = 0;
    for(let i = 0; i < contactos.length; i++){
      if (contactos[i].nombre.toLowerCase().includes(nombre.toLowerCase())){
        contactos.splice(nombre, 1)
        verificador = 1;
        
      }
     
    }
  if (verificador != 1){
    console.log("No podemos elimnar el contacto porque no existe.")}
}



eliminarContacto("luzmy")
mostrarContactos(contactos)