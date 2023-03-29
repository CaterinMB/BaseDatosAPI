const express = require('express')
const bodyParser = require('body-parser')
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
        const result = await client.db('Pach_OS').collection('Productos').find({}).limit(5).toArray()
        // res.status(200).send(result)
        if (result){
            response.success(req, res, "Producto(s) Encontrado(s)", 200)
        }else {
            response.error(req, res, "Producto(s) NO Encontrado(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// 2 findOne() HTTP: GET
router.get('/:id', async(req, res)=>{
    const id = req.params.id_Producto
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Productos').findOne({_id: new ObjectId(id) })
        // res.status(200).json(result)
        if (result){
            response.success(req, res, "Producto(s) Encontrado(s)", 200)
        }else {
            response.error(req, res, "Producto(s) NO Encontrado(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// CREATE
// Insert0ne() HTTP: POST
router.post('/', async(req, res)=>{
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()

        const result = await client.db('Pach_OS').collection('Productos').insertOne(body)
        res.status(201).json({
            message: 'Producto Creado',
            result
        })
    }finally{
        await client.close()
    }
})

// UPDATE
// UpdateOne() HTTP: PATCH
router.patch('/:id', async(req, res)=>{
    const id = req.params.id_Producto
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Productos').updateOne({_id: new ObjectId(id)}, {$set:{nom_Producto: body.nom_Producto, categoria: body.categoria}})
        res.status(200).json({
            message: 'Producto Actualizado',
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
    const id = req.params.id_Producto
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Productos').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'Producto Eliminado',
            result
        })
    }finally{
        await client.close()
    }
})

module.exports = router;
