// Importacion del framework de express
const express = require('express')
//importamos los controladores de los usuarios
const usuarioController = require("../controllers/usuarios.controller")

//instanciando un router
const router = express.Router()

//Versionando la version de la API como buena practica
const vs = "/api/v1"

router.get(vs + "/usuarios", usuarioController.consultarUsuarios)
    .get(vs + "/usuarios/:id", usuarioController.consultarUsuario)
    .post(vs + "/usuarios", usuarioController.crearUsuario)
    .put(vs + "/usuarios", usuarioController.modificarUsuario)
    .delete(vs + "/usuarios", usuarioController.eliminarUsuario)


module.exports=router