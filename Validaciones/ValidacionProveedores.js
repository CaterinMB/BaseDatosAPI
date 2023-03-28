use("Pach-OS");

db.createCollection("Proveedores", {
    validator : {
        $jsonSchema:{
            bsonType: "object",
            title: "Validacion Proveedores",
            required: ["id_Proveedor", "num_documento", "nombre", "celular", "correo", "estado", "insumos_p"],
            properties : {
                id_Proveedor:{
                bsonType: "int"
                },
                num_documento:{
                bsonType: "int"
                },
                nombre:{
                bsonType: "string"
                },
                celular:{
                bsonType: "int"
                },
                correo:{
                bsonType : "string"
                },
                estado:{
                bsonType: "boolean"
                },
                insumos_p:{
                bsonType : "string"
                }
            }
        }
    }
})