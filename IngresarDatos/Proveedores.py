import pymongo
import random
import string

# Conectar a la base de datos en MongoDB Atlas
client = pymongo.MongoClient("mongodb+srv://Pacho:Pacho12314@pach-os.bim9k0o.mongodb.net/test")
db = client.Pach_OS
collection = db.Proveedores

try:
    # La función list_collection_names() lanzará una excepción si no se puede conectar a la base de datos
    collection_names = db.list_collection_names()
    print("La conexión se ha establecido correctamente.")
except pymongo.errors.ConnectionFailure:
    print("La conexión ha fallado.")

i = 1
nombres = ["Juan", "Pedro", "María", "Luisa", "Ana", "Carlos", "Miguel", "Jorge", "Fernanda", "Diego", "Sofía", "Valentina", "Camila", "Andrés", "Gabriel", "Lucía", "Lucas", "Isabella", "Manuel", "Sebastián", "Alexandra", "Antonio", "Lorena", "Fabián", "Esteban", "Cristina", "Javier", "Ricardo", "Mariana", "Daniel", "Roberto", "Ángela", "Gustavo", "José", "Elena", "Pablo", "Gloria", "Julio", "Renata", "Óscar", "Laura", "Josué", "Alejandro", "Clara", "Catalina", "Rafael", "Francisco", "Diana", "Paola", "Andrea"]

insumo = ["Aguja de bridar","Aireador de vino","Alisador fondant","Anillo antigoteo",
"Anillas niveladoras","Aros de presentacion" ,"Asador de manzanas" ,"Asador de pollos","Atril" ,"Azucarero","Bolas de repostería",
"Bolsa enfriabotellas","Bolsa para grill","Bolsas para asar","Bomba de vacio","Boquillas","Bote de residuos","Brochetas ","Buñolera",
"Espátulas","Espátula de repostería","Especiero","Espolvoreador",
"Esponja limpiadora de sifones","Espumaderas","Estecas","Estuche de vapor","Etiquetas para vino","Exprimidores"]

def forinsumo (insumo):
    insumo_p=[]
    for O in range (random.randint(1, 10)):
        x= insumo[random.randint(0, len(insumo)-1)]
        insumo_p.append(x)
    return insumo_p


print("Entrará al for")
for i in range(100):
    
    Insumos1=forinsumo(insumo)

    num_documento = random.randint(1000000000, 9999999999)
    
    # nombre = ''.join(random.choices(string.ascii_lowercase, k=8))
    num1= random.randint(0,len(nombres)-1)
    num2= random.randint(0,len(nombres)-1)
    nombre1 = nombres[num1]
    nombre2 = nombres[num2]
    nombreCompleto = str(nombre1 ) +" "+ str(nombre2)

    
    celular = random.randint(3000000000, 9999999999)    

    correo = nombreCompleto + "@gmail.com"
    
    estado = random.choice([True, False])
    
    collection.insert_one({
        "id_Proveedor" : i,
        "num_documento" : num_documento,
        "nombre" : nombreCompleto,
        "celular" : celular,
        "correo" : correo,
        "estado" : estado,
        "insumos_p":Insumos1
    })

    N_placa =  random.randint(100, 999)
    L_placa = ''.join(random.choices(string.ascii_lowercase, k=3))
    placa = str(L_placa) +"-"+ str(N_placa)

print("Se termino la ejecucion")
# collection.drop()