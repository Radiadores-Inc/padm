/*
 * Main de la aplicacion
 * Este archivo es el que se encarga de ejecutar el servidor de express
 */

// Librerias
const express = require('express');
const logger = require('./src/util/logger');
const config = require('./src/config/config');
const db = require('./src/server/db');
const routing = require('./src/routes');
const errorMiddleware = require('./src/middlewares/errorMiddleware');
const bodyParser = require('body-parser');
require('express-async-errors');

const app = express();
const router = express.Router();
app.use(bodyParser.json());

routing(router);
app.use('/api/v1', router);
app.use(errorMiddleware);

db.connect().then(
    () => {
        logger.writeSuccess('Base de datos conectada exitosamente');
    },
    (err) => {
        logger.writeError(
            `Error al conectar con la base de datos: ${err.message}`
        );
    }
);

app.listen(config.PORT, () => {
    logger.writeSuccess(
        `${config.APPLICATION_NAME} ejecutandose en el puerto ${config.PORT}`
    );
});
