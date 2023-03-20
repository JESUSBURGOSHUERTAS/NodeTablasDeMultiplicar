const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida=""
    let consola = "";

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} X ${[i]} = ${base * [i]}\n`;
      consola += `${base} X ${[i]} = ${base * [i]}\n`.bgBlue;
    }

    if (listar) {
      console.log("================");
      console.log(`Tabla del: ${base}`.blue);
      console.log("================");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};

// fs.writeFile(`tabla-${ base }.txt`, salida, (err)=>{
// if(err) throw err;
// console.log(`tabla-${ base }.txt creado`);})
//  node app -b78 -l -h=20
