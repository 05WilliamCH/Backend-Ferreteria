const {Router} = require('express');
const {getAllcategoria, getcategoria, crearcategoria, eliminarcategoria, actualizarcategoria} = require('../controllers/categoria.controller')



const router = Router();

router.get('/categoria', getAllcategoria)

router.get('/categoria/:idcategoria', getcategoria)

router.post('/categoria', crearcategoria)

router.delete('/categoria/:idcategoria', eliminarcategoria)

router.put('/categoria/:idcategoria', actualizarcategoria)

module.exports = router;



