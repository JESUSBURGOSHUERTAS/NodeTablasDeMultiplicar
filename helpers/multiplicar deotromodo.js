
const { rejects } = require("assert");
const fs = require("fs");

const crearArchivo = (base = 5) => {
  
 return new Promise((resolve, reject)=>{
    console.log("================");
    console.log(`Tabla del: ${base}`);
    console.log("================");
  
  
    let salida = "";
  
    for (let i = 0; i <= 10; i++) {
      salida += `${base} X ${[i]} = ${base * [i]}\n`;
    }
    console.log(salida);
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);  
    resolve(`tabla-${base}.txt`);
 })

};

module.exports={
    crearArchivo
}


// fs.writeFile(`tabla-${ base }.txt`, salida, (err)=>{
    // if(err) throw err;
    // console.log(`tabla-${ base }.txt creado`);})