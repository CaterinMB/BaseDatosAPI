import pymongo
import random
from datetime import datetime

# Conectar a la base de datos en MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/test")
db = client.Pach_OS
collection = db.Ventas

try:
    # La función list_collection_names() lanzará una excepción si no se puede conectar a la base de datos
    collection_names = db.list_collection_names()
    print("La conexión se ha establecido correctamente.")
except pymongo.errors.ConnectionFailure:
    print("La conexión ha fallado.")

inicio = datetime(2022, 1, 1)
final =  datetime(2022, 12, 31)
nombres = ["Eudy", "Alcairo", "Liyi", "Braider", "Daela", "Eferson", "Eliz Yael", "Kael Asaf", "Gia Tanit", "Leam Emir", "Laia Milu", "Max Müller", "Luciana", "Isabella", "Salomé", "Emmanuel", "Antonella", "Emiliano", "Santiago", "Samuel", "Jerónimo", "Mariana", "Juan", "Pedro", "María", "Luisa", "Ana", "Carlos", "Miguel", "Jorge", "Fernanda", "Diego", "Sofía", "Valentina", "Camila", "Andrés", "Gabriel", "Lucía", "Lucas", "Isabella", "Manuel", "Sebastián", "Alexandra", "Antonio", "Lorena", "Fabián", "Esteban", "Cristina", "Javier", "Ricardo", "Mariana", "Daniel", "Roberto", "Ángela", "Gustavo", "José", "Elena", "Pablo", "Gloria", "Julio", "Renata", "Óscar", "Laura", "Josué", "Alejandro", "Clara", "Catalina", "Rafael", "Francisco", "Diana", "Paola", "Andrea"]

i = 1

print("Entrará al for")
for i in range(100):
    IdU = random.randint(0, 99)
    IdP = random.randint(1, 99)
    date = inicio + (final - inicio) * random.random()
    nombre = random.choice(nombres)
    total = random.randint(5000, 1000000)
    cand = random.randint(1, 15)  
    estado = random.choice([True, False])
    collection.insert_one({
        "id_Venta" : i,
        "id_Usuario" : IdU,
        "id_Producto" : IdP,
        "Fecha" : date,
        "Cliente" : nombre,
        "Total" : total,
        "Cantidad" : cand,
        "Efectivo" : estado
    })
print("Se termino la ejecucion")