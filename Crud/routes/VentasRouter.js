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
        const result = await client.db('Pach_OS').collection('Ventas').find({}).limit(5).toArray()
        //res.status(200).send(result)
        if (result){
            response.success(req, res, "Venta(s) Encontrada(s)", 200)
        }else {
            response.error(req, res, "Venta(s) NO Encontrada(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// 2 findOne() HTTP: GET
router.get('/:id', async(req, res)=>{
    const id = req.params.id_Venta
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Ventas').findOnr({_id: new ObjectId(id) })
        // res.status(200).json(result)
        if (result){
            response.success(req, res, "Venta(s) Encontrada(s)", 200)
        }else {
            response.error(req, res, "Venta(s) NO Encontrada(s)", 404)
        }
    }finally{
        await client.close()
    }
})

// CREATE
// Insert0ne() HTTP: POST
router.patch('/', async(req, res)=>{
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        await Createone(client ,{
            "id_Venta" : 101,
            "id_Usuario" : 74,
            "id_Producto" : 52,
            "Fecha" : "2022-4-23T11:11:16.666Z",
            "Cliente" : "Liyi",
            "Total" : 10409,
            "Cantidad" : 8,
            "Efectivo" : true
        });
        
        async function Createone(client , venta){
            const result = await client.db("Pach_OS").collection("Ventas").insertOne(venta);
            res.status(201).json({
                message: 'Venta Creada',
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
    const id = req.params.id_Venta
    const body = req.body
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Ventas').updateOne({_id: new ObjectId(id)}, {$set:{id_Producto: 53}})
        res.status(200).json({
            message: 'Venta Actualizada',
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
    const id = req.params.id_Venta
    const client = new MongoClient(uri)
    try{
        await client.connect()
        const result = await client.db('Pach_OS').collection('Ventas').deleteOne({_id: new ObjectId(id)})
        res.status(200).json({
            message: 'Venta Eliminada',
            result
        })
    }finally{
        await client.close()
    }
})

module.exports = router;