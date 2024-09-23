const { Router } = require("express");
const {
  getAllusuarios,
  getUsuarios,
  crearUsuarios,
  eliminarUsuarios,
  actualizarUsuarios,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/usuario", getAllusuarios);

router.get("/usuario/:id_usuario", getUsuarios);

router.post("/usuario", crearUsuarios);

router.delete("/usuario/:id_usuario", eliminarUsuarios);

router.put("/usuario/:id_usuario", actualizarUsuarios);

module.exports = router;
