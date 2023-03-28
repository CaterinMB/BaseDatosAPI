use("Pach-OS");

db.createCollection("Ventas", {
    validator : {
        $jsonSchema:{
            bsonType: "object",
            title: "Validacion Ventas",
            required: ["id_Venta", "id_Usuario", "id_Producto", "Fecha", "Cliente", "Total", "Cantidad", "Efectivo"],
            properties : {
                id_Venta:{
                bsonType: "int"
                },
                id_Usuario:{
                bsonType: "int"
                },
                id_Producto:{
                bsonType: "int"
                },
                Fecha:{
                bsonType: "datetime"
                },
                Cliente:{
                bsonType : "string"
                },
                Total:{
                bsonType: "int"
                },
                Cantidad:{
                bsonType: "int"
                },
                Efectivo:{
                bsonType : "boolean"
                }
            }
        }
    }
})