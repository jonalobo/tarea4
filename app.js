const express = require('express')
const rutaProductos = require('./routes/products')

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use('/api/productos', rutaProductos)

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Servidor en línea en el puerto ${PORT}`)
})

