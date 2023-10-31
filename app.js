
function has(x) {
  seed = 253674078499881;
  diccionario = "abefimoprstuv";
  palabra = "";
  for (i = 0; i < 10; i++) {
    res = seed % 19;
    seed = (seed - res) / 19;
    palabra += diccionario[res];
  }
  //   return res;
  //   return seed;
  return palabra;
}
// console.log(has())
// console.log(has().split(""))
console.log(has().split("").reverse());

// https://www.freecodecamp.org/espanol/news/tabla-hash-en-javascript-hash-de-arreglo-asociativo-en-js/

// https://www.youtube.com/watch?v=dIaNpQZvd0g&ab_channel=Prof.EdgarTista