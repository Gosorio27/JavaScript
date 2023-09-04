function celsius (a){
  let celsiusFahrenheit = (a - 32) * 5/9;
  console.log(a+ "° Grados celsius son " +celsiusFahrenheit.toFixed()+"°" +" grados fahrenheit")  
}


function fahrenheit (a){
  let fahrenheitCelsius = (a * 9/5)+32;
  console.log(a+ "° Grados fahrenheit  son " +fahrenheitCelsius.toFixed()+"°" +" grados celsius")
}


celsius(10);
fahrenheit(10);