const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;
const ubicacion = require('./controlador/ubicacion')
const clima = require('./controlador/clima')
let getInfo = async(pais, pa2, pa3, pa4) => {
    try {
        let coords = await ubicacion.getCiudadLatLon(pais);
        let temp = await clima.getClima(coords.lat, coords.lon);
        let coords1 = await ubicacion.getCiudadLatLon(pa2);
        let temp11 = await clima.getClima(coords1.lat, coords1.lon);
        let coords2 = await ubicacion.getCiudadLatLon(pa3);
        let temp3 = await clima.getClima(coords2.lat, coords2.lon);
        let coords3 = await ubicacion.getCiudadLatLon(pa4);
        let temp4 = await clima.getClima(coords3.lat, coords3.lon);
        return {
            temp,
            temp11,
            temp3,
            temp4
        }
    } catch (error) {
        console.log(`No se puede obtener el clima de: ${pais}`);
    }
};

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
//helpers
let temp
let temp2
let temp3
let temp4
getInfo("Quito", "Guayaquil", "Madrid", "Paris").then(res => {
    temp = res.temp;
    temp2 = res.temp11;
    temp3 = res.temp3
    temp4 = res.temp4
    console.log(res.temp, res.temp11);
}).catch(err => console.log(err));

app.get('/', function(req, res) {

    //estamos usando plantilaaY
    res.render('home', {
        nombre: "mIsael Cabascango",
        pais1: "Quito",
        pais2: "Guayaquil",
        temperatura1: temp,
        temperatura2: temp2
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        ciudad1: "Madrid",
        ciudad2: "Paris",
        Tmp1: temp3,
        Tmp2: temp4
    })
});

app.listen(port, () => {
    console.log(`escichando peticiones en el puerto ${port}`);
});