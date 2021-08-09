const express = require('express')
const app = express()
const path = require('path')
const port = 3030

/* Middleware */
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))


/* Servidor escuchando, siempre va al final */
app.listen(port, () => console.log("Server corriendo en http://localhost:"+port))
