// Importamos el framework de express
const express = require('express')



//Creamos/instanciamos la aplicacion de express
const app = express()

//Integrando el router con la app
const router= require("./routers/index.router")
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Puerto donde se levanta el servidor web
// Puerto donde esta escuchando la API
const PORT = 3000

//Levantar la API que estará escuchando en el puerto 3000
//Primer parametro: Puerto
//Segundo parametro: Callback
app.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`)
})