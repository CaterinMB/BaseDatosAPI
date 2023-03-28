const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient, ObjectId} = require("mongodb");
const uri = "mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/?retryWrites=true&w=majority";

const routerApi = require('./routes')

app = express()

routerApi(app)

port = 5000

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.status(200).send("Servidor del curso 2501259")
})

app.listen(port, ()=>{
   console.log(`El servidor esta escuchando en http://localhost:${port}...`)
})