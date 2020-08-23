/*
* Archivo principal de rutas.
* Sobre este archivo no se deben definir rutas, sino importarlas de su propio archivo de rutas
*/
const communicates = require('./communicatesRoutes');

module.exports = (router) => {
    communicates(router);
}