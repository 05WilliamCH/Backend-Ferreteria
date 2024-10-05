const {Router} = require('express');
const {
    getallcategorias, 
    getcategorias, 
    crearcategorias, 
    eliminarcategorias, 
    actualizarcategorias,
} = require('../controllers/categorias.controller')

const router = Router();

router.get("/categorias", getallcategorias);

router.get("/categorias/:idcategoria", getcategorias);

router.post("/categorias", crearcategorias);

router.delete("/categorias/:idcategoria", eliminarcategorias);

router.put("/categorias/:idcategoria", actualizarcategorias);

module.exports = router;



