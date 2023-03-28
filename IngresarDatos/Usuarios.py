import pymongo
import random
import string

# Conectar a la base de datos en MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/test")
db = client.Pach_OS
collection = db.Usuarios

try:
    # La función list_collection_names() lanzará una excepción si no se puede conectar a la base de datos
    collection_names = db.list_collection_names()
    print("La conexión se ha establecido correctamente.")
except pymongo.errors.ConnectionFailure:
    print("La conexión ha fallado.")


nombres = ["Eudy", "Alcairo", "Liyi", "Braider", "Daela", "Eferson", "Eliz Yael", "Kael Asaf", "Gia Tanit", "Leam Emir", "Laia Milu", "Max Müller", "Luciana", "Isabella", "Salomé", "Emmanuel", "Antonella", "Emiliano", "Santiago", "Samuel", "Jerónimo", "Mariana", "Juan", "Pedro", "María", "Luisa", "Ana", "Carlos", "Miguel", "Jorge", "Fernanda", "Diego", "Sofía", "Valentina", "Camila", "Andrés", "Gabriel", "Lucía", "Lucas", "Isabella", "Manuel", "Sebastián", "Alexandra", "Antonio", "Lorena", "Fabián", "Esteban", "Cristina", "Javier", "Ricardo", "Mariana", "Daniel", "Roberto", "Ángela", "Gustavo", "José", "Elena", "Pablo", "Gloria", "Julio", "Renata", "Óscar", "Laura", "Josué", "Alejandro", "Clara", "Catalina", "Rafael", "Francisco", "Diana", "Paola", "Andrea"]
i = 1

print("Entrará al for")
for i in range(100):
    
    num_documento = random.randint(1000000000, 9999999999)
    
    nombre = random.choice(nombres)
    
    celular = random.randint(3000000000, 9999999999)    

    correo = nombre + "@gmail.com"
    
    estado = random.choice([True, False])
    
    collection.insert_one({
        "id_Usuario" : i,
        "num_documento" : num_documento,
        "nombre" : nombre,
        "celular" : celular,
        "correo" : correo,
        "estado" : estado
    })
    
print("Se termino la ejecucion")