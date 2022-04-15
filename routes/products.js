const { Router } = require('express')
const { agregarProducto, devolverProductos, actualizarProducto, devolverProductoId, eliminarproducto } = require('../controller/productsController')

const rutaProductos = Router()

rutaProductos.get('/', devolverProductos)
rutaProductos.get('/:id', devolverProductoId)
rutaProductos.post('/', agregarProducto)
rutaProductos.put('/:id', actualizarProducto)
rutaProductos.delete('/:id', eliminarproducto)


module.exports = rutaProductos