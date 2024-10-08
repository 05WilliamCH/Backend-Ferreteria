const pool = require("../db");

//------------------------------------ MOSTRAR TODOS LOS CATEGORIAS --------------------------------------
const getallcategorias = async (req, res, next) => {
  try {
    const allcategorias = await pool.query("SELECT *FROM categoria");
    res.json(allcategorias.rows);
  } catch (error) {
    next(error);
  }
};

//------------------------------------- MOSTRAR UN SOLO CATEGORAI ----------------------------------------
const getcategorias = async (req, res, next) => {
  try {
    const { idcategoria } = req.params;
    const result = await pool.query(
      "SELECT *FROM categoria WHERE idcategoria = $1",
      [idcategoria]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "categoria no encontrado",
      });
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
//---------------CREAR UN NUEVO CATEGORIA ------------------
const crearcategorias = async (req, res, next) => {
  try {
    //console.log(req.body);
    const { categoria } = req.body;
    const result = await pool.query(
      "INSERT INTO categoria ( categoria) VALUES ($1 ) RETURNING *",
      //INSERT INTO usuario(iduser, nombre, apellido, telefono, email, contrasenia) VALUES (2,'juan', 'Mecanico', 3215792, 'juan@mecanico.com', 'juan123')
      [categoria]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//--------------------- ACTUALIZAR DATOS DE CATEGORIA -----------------------------------------
const actualizarcategorias = async (req, res, next) => {
  const { idcategoria } = req.params;
  try {
    const { categoria } = 
    req.body;

    const result = await pool.query(
      "UPDATE categoria SET categoria = $1 WHERE idcategoria = $2 RETURNING *",
      [categoria, idcategoria]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "categoria no encontrado",
      });
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//---------------------- ELIMINAR CATEGORIA --------------------------
const eliminarcategorias = async (req, res, next) => {
  const { idcategoria } = req.params;
  try {
    const result = await pool.query("DELETE FROM categoria WHERE idcategoria = $1",[
      idcategoria,
    ]);

    if (result.rowCount === 0)
      return res.status(404).json({
        message: "categoria no encontrado",
      });

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getallcategorias,
  getcategorias,
  crearcategorias,
  actualizarcategorias,
  eliminarcategorias,
};
