const { option } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')



console.clear();
 

 crearArchivo(argv.b, argv.l, argv.h)
     .then((nombreArchivo) => console.log(nombreArchivo, "creado".green))
     .catch((err) => console.log(err));





// console.log(process.argv);
// console.log(argv);
// console.log("base: yargs", argv.base);

// console.log(process.argv);
// const [, , arg3= 'base=5'] = process.argv;
// const [, base=5] = arg3.split('='); // node app --base=1

// const base = 2; 