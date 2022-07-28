/*
Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”.
*/

const pizzas = [
    {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["Salsa de tomate", "Muzzarella"],
    precio: 950
    },
    {
    id: 2,
    nombre: "Hawaiana",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Ananá"],
    precio: 1200
    },
    {
    id: 3,
    nombre: "Fugazzeta",
    ingredientes: ["Muzzarella", "Cebolla"],
    precio: 1100
    },
    {
    id: 4,
    nombre: "Fugazzeta rellena",
    ingredientes: ["Muzzarella", "Jamón", "Cebolla"],
    precio: 1800
    },
    {
    id: 5,
    nombre: "Jamón y morrones",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Morrón", "Jamón"],
    precio: 1600
    },
    {
    id: 6,
    nombre: "Especial",
    ingredientes: ["Salsa de tomate", "Muzzarella", "Jamón", "Morrón", "Cebolla", "Huevo"],
    precio: 1000
    },
    {
    id: 7,
    nombre: "4 Quesos",
    ingredientes: ["Mozzarella", "Queso Azul", "Queso Parmesano", "Queso Cheddar"],
    precio: 1300
    }
    ];

//A
function imparId(){
    imparId = pizzas.filter(i =>  i.id%2 == 1);
    imparId.forEach(i => console.log(i.id))
}

//B

function askPrecio (parameter) {
    const filterPizzas = pizzas.filter(i => i.precio <= parameter)
    filterPizzas.forEach(i => {
        return console.log(`La pizza ${i.nombre} (nro ${i.id}) vale menos de ${parameter}. Su precio es de ${i.precio}`)
    })
}

//C

const nombrePizzas = pizzas.forEach(i => console.log(i.nombre))

//D

const precioPizzas = pizzas.map( i => i.precio)

//E

function namePrecio () {
    pizzas.forEach(i => console.log(`La pizza ${i.nombre} vale ${i.precio}`))
}
