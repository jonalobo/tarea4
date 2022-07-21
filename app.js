const express = require('express')
const cors = require('cors')

const rutaProductos = require('./routes/products')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/productos', rutaProductos)

const PORT = 8080


const server = app.listen(PORT,()=>{
    console.log(`Servidor en línea en el puerto ${PORT}`)
})
server.on('error',(error)=>{
    console.log(error)
})

