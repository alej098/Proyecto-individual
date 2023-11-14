const { Router } = require('express');
const {getTemperamentsHandler}= require('../handlers/temperamentsHandler')
const {getDogsHandler}= require('../handlers/DogsHanlder')
const {getDogsIDhandler} = require('../handlers/handlerDogsID')
const { getDogsByNombreHandler }= require('../handlers/handlerDogsName')
const { getCreateDogshandler }= require('../handlers/HandlerCreateDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs/name', getDogsByNombreHandler )
router.get('/dogs/:id', getDogsIDhandler)
router.get('/dogs', getDogsHandler )
router.post('/dogs',  getCreateDogshandler)
router.get('/temperaments', getTemperamentsHandler )



module.exports = router;
