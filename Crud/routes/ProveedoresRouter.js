const express = require('express')
app = express()
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
    const id = req.params.id
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').findOne({_id: new ObjectId(id) })
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
router.post('/', async(req, res)=>{
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        
        const result = await client.db('Pach_OS').collection('Provedor').insertOne(body)
        res.status(201).json({
            message: 'Proveedor Creado',
            result
        })
    }finally{
        await client.close()
    }
})

// UPDATE
// UpdateOne() HTTP: PUT
router.put("/:id", async(req, res) =>{
    const id = req.params.id
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db("Pach_OS").collection("Provedor").updateOne({_id: new ObjectId(id)}, {$set: body})
        res.json({
            message: "Proveedor Actualizado",
            data: body
        })
    }finally{
        await client.close()
    }
})

// UPDATE
// UpdateOne() HTTP: PATCH
router.patch('/:id', async(req, res)=>{
    const body = req.body
    const id = req.params.id
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Provedor').updateOne({_id: new ObjectId(id)}, {$set:{body}})
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
    const id = req.params.id
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
