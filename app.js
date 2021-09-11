const express = require('express')
const app = express()
const path = require('path')
const port = 3030

/* Middleware, establecer ruta estatica para requerir archivos */
app.use(express.static('public'))

/* app get */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

/* sign-up */
app.get('/sign', (req, res) => res.sendFile(path.join(__dirname, 'views', 'sign-up.html')))


/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))
