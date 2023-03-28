const express = require('express')
const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/?retryWrites=true&w=majority";
const response = require('../network/response')
const router = express.Router()

//READ
// 1 find() HTTP: GET
router.get('/', async(req, res)=>{
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').find({}).limit(5).toArray()
        // res.status(200).send(result)
        if (result){
            response.success(req, res, "Proveedor(es) Encontrado(s)", 200)
        }else {
            response.error(req, res, "Proveedor(es) NO Encontrado(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// 2 findOne() HTTP: GET
router.get('/:id', async(req, res)=>{
    const id = req.params.id_Usuario
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').findOnr({_id: new ObjectId(id_Usuario) })
        // res.status(200).json(result)
        if (result){
            response.success(req, res, "Proveedor(es) Encontrado(s)", 200)
        }else {
            response.error(req, res, "Proveedor(es) NO Encontrado(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// CREATE
// Insert0ne() HTTP: POST
router.patch('/', async(res)=>{
    const client = new MongoClient(uri)
    try{
        await client.connect()
        await Createone(client ,{
            "id_Proveedor" : 101,
            "num_documento" : 1006905347,
            "nombre" : "María Luisa",
            "celular" : 3246089393,
            "correo" : "María_Luisa@gmail.com",
            "estado" : true,
            "insumos_p": ["Anillas niveladoras","Aros de presentacion" ,"Asador de manzanas"]
          });
        
        async function Createone(client, proveedor){
            const result = await client.db('Pach_OS').collection('Provedor').insertOne(proveedor)
            res.status(201).json({
                message: 'Proveedor Creado',
                result
            })
        }
    }finally{
        await client.close()
    }
})

// UPDATE
// UpdateOne() HTTP: PATCH
router.post('/:id', async(req, res)=>{
    const id = req.params.id_Proveedor
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').updateOne({_id: new ObjectId(id)}, {$set:{nombre: "Estefania"}})
        res.status(200).json({
            message: 'Proveedor Actualizado',
            data: body,
            result
        })
    }finally{
        await client.close()
    }
})

// DELETE
// DeleteOne() HTTP: DELETE
router.delete('/:id', async(req, res)=>{
    const id = req.params.id_Proveedor
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'Proveedor Eliminado',
            result
        })
    }finally{
        await client.close()
    }
})

module.exports = router;