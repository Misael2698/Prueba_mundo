// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     let salida = {
//         nombre: 'Misael',
//         edad: 21,
//         url: req.url
//     }
//     res.write(JSON.stringify(salida))
//         //res.write("Hola munda, desde nodejs!");
//     res.end();

// }).listen(8080);
// console.log("escuchando en el puerto 8080");

// const ubicacion = require('./controlador/ubicacion')
// const clima = require('./controlador/clima')
// const argv = require('yargs').options({
//     nombre: {
//         alias: 'n',
//         desc: 'Nombre de la ciudad para obtener el clima',
//         demand: true
//     }
// }).argv;

// let getInfo = async(pais) => {
//     try {
//         let coords = await ubicacion.getCiudadLatLon(pais);
//         let temp = await clima.getClima(coords.lat, coords.lon);
//         return `El clima en ${coords.name} es de ${temp} °C`
//     } catch (error) {
//         console.log(`No se puede obtener el clima de: ${pais}`);
//     }
// };
// getInfo(argv.nombre).then(res => {
//     console.log(res);
// }).catch(err => console.log(err));