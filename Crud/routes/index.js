const VentasRouter = require('./VentasRouter')
const UsuariosRouter = require('./UsuariosRouter')
const ProveedoresRouter = require('./ProveedoresRouter')
const ProductoRouter = require('./ProductosRouter')

function routerApi(app){
    app.use('/Ventas', VentasRouter)
    app.use('/Usuarios', UsuariosRouter)
    app.use('/Proveedores', ProveedoresRouter)
    app.use('/Productos', ProductoRouter)
}

module.exports = routerApi
