import pymongo
import random
import string

# Conectar a la base de datos en MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/test")
db = client.Pach_OS
collection = db.Productos

try:
    # La función list_collection_names() lanzará una excepción si no se puede conectar a la base de datos
    # collection_names = db.list_collection_names()
    print("La conexión se ha establecido correctamente.")
except pymongo.errors.ConnectionFailure:
    print("La conexión ha fallado.")


productos = []
i = 1
insumo = ["Aguja de bridar","Aireador de vino","Alisador fondant","Anillo antigoteo",
"Anillas niveladoras","Aros de presentacion" ,"Asador de manzanas" ,"Asador de pollos","Atril" ,"Azucarero","Bolas de repostería",
"Bolsa enfriabotellas","Bolsa para grill","Bolsas para asar","Bomba de vacio","Boquillas","Bote de residuos","Brochetas ","Buñolera",
"Espátulas","Espátula de repostería","Especiero","Espolvoreador",
"Esponja limpiadora de sifones","Espumaderas","Estecas","Estuche de vapor","Etiquetas para vino","Exprimidores"]


print("Entrará al for")
for i in range(100): 
    nom_producto = ''.join(random.choices(string.ascii_lowercase, k=10))
    while nom_producto in productos:
        producto = ''.join(random.choices(string.ascii_lowercase, k=10))
    productos.append(nom_producto)
    precio=random.randint(1000, 1000000)
    cantidad=random.randint(1, 100)
    estado=random.randint(0, 1)
    if estado == 0:
        estado = True
    else:
        estado = False
    
    categoria=random.randint(1, 3)
    if categoria == 1:
        categoria = "bebidas"
    elif categoria == 2:
        categoria = "pizza"
    else:
        categoria = "Bar"

    collection.insert_one({
        "id_Producto" : i,
        "nom_Producto" : nom_producto,
        "precio_venta" : precio,
        "cant_productos" : cantidad,
        "estado" : estado,
        "categoria" : categoria,
        "insumo": ""
    })
    
print("Se termino la ejecucion")