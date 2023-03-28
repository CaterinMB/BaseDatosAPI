use("Pach-OS");

db.createCollection("Usuarios", {
    validator : {
        $jsonSchema:{
            bsonType: "object",
            title: "Validacion usuaios",
            required: [ "id_Usuario", "num_documento", "nombre", "celular", "correo", "estado" ],
            properties : {
                id_Usuario:{
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
                    bsonType : "boolean"
                }
            }
        }
    }
})