use("Pach-OS");

db.createCollection("Productos", {
    validator : {
        $jsonSchema:{
            bsonType: "object",
            title: "Validacion Productos",
            required: ["id_Producto", "nom_Producto", "precio_venta", "cant_productos", "estado", "categoria", "insumo"],
            properties : {
                id_Producto: {
                bsonType: "int"
                },
                nom_Producto:{
                bsonType: "string"
                },
                precio_venta:{
                bsonType: "int"
                },
                cant_productos:{
                bsonType: "int"
                },
                categoria:{
                bsonType : "string"
                },
                insumos:{
                bsonType: "string"
                },
                estado:{
                bsonType : "boolean"
                }
            }
        }
    }
})