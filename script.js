/* Tenemos un array en una variable masNumeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
Recorré el array masNumeros (utilizando forEach) y:
Si el número es par, agregalo al array numerosPares
Si el número es impar, agregalo al array numerosImpares
Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
*/

// const masNumeros = [
//     43,
//     11,
//     18,
//     46,
//     44,
//     37,
//     42,
//     29,
//     9,
//     3,
//     37,
//     0,
//     40,
//     10,
//     38,
//     34,
//     25,
//     40,
//     4,
//     32,
//   ];
//   const numerosPares = [];
//   const numerosImpares = [];
  
  // SOLUCION
  
//   masNumeros.forEach( numero => numero % 2 === 0 ? numerosPares.push(numero) : numerosImpares.push(numero) )
//   console.log("pares: ", numerosPares);
//   console.log("impares: ", numerosImpares);
  // deberias tener como resultado
  // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
  // impares: [43, 11, 37, 29, 9, 3, 37, 25]





//   Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA

//const costos = [12.5, 56, 98, 45.75];

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

 const agregarIVA = function (costo) {
   return costo * 1.21;
 };


// // codear acá la solución del ejercicio
// const preciosFinales = costos.map(costo => agregarIVA(sumarGanancia(costo)))


// console.log(preciosFinales);
// // deberia mostrar
// // [ 22.6875, 101.64, 177.87, 83.03625 ]

// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// También tenemos un array en una variable productos con los nombres de cada producto.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
// El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos
const productos = ["celular", "notebook", "monitor"];
const costos = [12.5, 56, 98];

//codear acá la solución del ejercicio
const jerbito = costos.map(costo => agregarIVA(sumarGanancia(costo)))
const preciosFinales = productos.map((producto,index) => `${producto}  ${jerbito[index]}`)

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]





// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado
// const costos = [
//   39,
//   53,
//   17,
//   99,
//   7,
//   9,
//   6,
//   68,
//   54,
//   97,
//   27,
//   90,
//   92,
//   75,
//   26,
//   86,
//   22,
//   42,
//   20,
//   14,
// ];
// // codear acá la solución del ejercicio

// const losMasCaros = costos.filter (costo => costo > 50)

// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

// Tenemos un array en una variable frases con frases al azar.
// Usando filter, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable frasesCortas
// Mostrar el array resultante
// const frases = [
//   'Ut vero.',
//   'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
//   'Diam rebum nonumy et.',
//   'Kasd stet.',
//   'Sit et dolor.',
//   'Est diam justo gubergren dolores et vero.',
//   'Et sanctus sanctus et dolor clita.',
//   'Dolores.',
//   'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'
// ];

// // codear acá la solución del ejercicio
// const frasesCortas = frases.filter( frase => frase.length < 20);

// console.log(frasesCortas);
// deberia mostrar
// [ 'Ut vero.', 'Kasd stet.', 'Sit et dolor.', 'Dolores.' ]


// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
// const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// // codea acá tu solución
// const numerosPares = masNumeros.filter( numero => numero % 2 === 0);
// const numerosImpares = masNumeros.filter( numero => numero % 2 !== 0);

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]




// Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
// Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.
// Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
// Mostrar el array resultante
// const mix = [
//   "Ut vero.",
//   2,
//   function () {
//     console.log("hola mundo!");
//   },
//   56,
//   "Diam rebum nonumy et.",
//   true,
//   false,
//   "Kasd stet.",
//   "Sit et dolor.",
//   null,
//   null,
//   [1, 2, 3],
//   "Dolore.",
// ];

// // codear acá la solución del ejercicio
// const soloStrings = mix.filter ( element => typeof element === 'string')
// console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

// Tenemos un array playlist con canciones seleccionadas al azar por spotify para reproducir.
// Tenemos otro array playlistEscuchada que tiene canciones que ya escuchamos anteriormente.
// Usando filter, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en playlist que no están en playlistEscuchada
// Guarda el resultado en la variable playlistSinEscuchar

// const playlist = [
//   "Smells Like Teen Spirit",
//   "Everlong",
//   "Come As You Are",
//   "The Pretender",
//   "Heart-Shaped Box",
//   "Learn to Fly",
//   "Lithium",
// ];
// const playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

// /// codea aca tu solución
// const playlistSinEscuchar = playlist.filter(cancion => !playlistEscuchada.includes(cancion))
// console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]