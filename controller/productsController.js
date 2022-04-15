
let acumulador = 5
const productos = [{
    title:"moto",
    price: 15000,
    thumbnail:"https://moto.jpg",
    id:1
},{
    title:"bicicleta",
    price: 1000,
    thumbnail:"https://bicibleta.jpg",
    id:2
},{
    title:"horno",
    price: 500,
    thumbnail:"https://horno.jpg",
    id:3
},{
    title:"tv",
    price: 150,
    thumbnail:"https://tv.jpg",
    id:4
},{
    title:"laptop",
    price: 700,
    thumbnail:"https://laptop.jpg",
    id:5
}]

const devolverProductos = (req, res)=>{
    res.send(productos)
}
const devolverProductoId = (req, res)=>{
    const id = req.params.id
    
    productos.filter((numero) => {
        const seleccion = numero.id
        if (id == seleccion) {
            res.send(numero)
        } 
    })
    res.status(404).json({mensaje:"Producto no encontrado"})
}

const agregarProducto = (req, res)=>{
    const id = ++acumulador
    const {title,price,thumbnail} = req.body
    const nuevoProducto = {title,price,thumbnail,id}
    productos.push(nuevoProducto)
    res.status(201).json({
        productos
    })
}

const actualizarProducto = (req, res)=>{
    const id = req.params.id
    const {title,price,thumbnail} = req.body
    
    productos.filter((numero) => {
        const seleccion = numero.id
        if (id == seleccion) {
            numero.title = title
            numero.price = price
            numero.thumbnail = thumbnail
            res.json({productos})
        } 
    })
    res.status(404).json({mensaje:"Producto no encontrado"})
}

const eliminarproducto = (req,res)=>{
    const id = req.params.id
    const {title,price,thumbnail} = req.body
    
    productos.filter((numero) => {
        const seleccion = numero.id
        if (id != seleccion) {
            res.json({productos})
        } 
    })
    res.status(404).json({mensaje:"Producto no encontrado"})
}

module.exports = {
    devolverProductos,
    devolverProductoId,
    agregarProducto,
    actualizarProducto,
    eliminarproducto
}