function ingresarDatos() {
    // Obtener el valor del input
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // Verificar si se introdujeron datos
    if (nombre === "" || edad === "") {
        document.getElementById("resultado").innerText = "Hola " + datoNoIntroducido;
    } else {
        // Crear un indiv la clase Persona
        let persona = new Persona(nombre, parseInt(edad, 10));

        // Modificar el DOM para mostrar el saludo
        if (persona.edad >= 18) {
            document.getElementById("resultado").innerText = saludoIntro + " " + persona.nombre + "! " + mayorDeEdad;
        } else {
            document.getElementById("resultado").innerText = saludoIntro + " " + persona.nombre + "! " + menorDeEdad;
        }
    }
}

let saludoIntro = "¡Hola! Es un gusto";
let mayorDeEdad = "Eres mayor de edad y puedes disfrutar del contenido completo de nuestro sitio.";
let menorDeEdad = "Al ser menor te recomendamos que para comprar tengas el consentimiento de tus padres o un adulto a cargo de ti.";
let datoNoIntroducido = "Completar datos solicitados por favor.";

// Clase para construir los datos cuando se ingresen
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad; 
    }
}


//Valor Productos y Carrito

const productos = [
    {id: 1, tipo: "Produccion completa", nombre: 'Produccion Completa Promo Apollo Full', precio: 155000, cantidad: 2},
    {id: 2, tipo: "Produccion completa", nombre: 'Produccion Completa Promo Apollo', precio: 145000, cantidad: 4},
    {id: 3, tipo: "Produccion completa", nombre: 'Produccion Completa Promo Akai', precio: 125000, cantidad: 2},
    {id: 4, tipo: "Beats", nombre: 'Beat a Pedido', precio: 80000, cantidad: 4},
    {id: 5, tipo: "Beats", nombre: 'Beat de Catalogo', precio: 50000, cantidad: 0},
    {id: 6, tipo: "Beats", nombre: 'Beat Ofertas', precio: 30000, cantidad: 0},
    {id: 7, tipo: "Grabacion", nombre: 'Grabacion de Voces Apollo', precio: 70000, cantidad: 3},
    {id: 8, tipo: "Grabacion", nombre: 'Grabacion de Voces Apollo Maqueta', precio: 30000, cantidad: 1},
    {id: 9, tipo: "Grabacion", nombre: 'Grabacion de Voces Akai', precio: 60000, cantidad: 3},
    {id: 10, tipo: "Grabacion", nombre: 'Grabacion de Voces Akai Maqueta', precio: 20000, cantidad: 1},
    {id: 11, tipo: "Sonido", nombre: 'Mezcla Beat', precio: 50000, cantidad: 2},
    {id: 12, tipo: "Sonido", nombre: 'Mezcla de Voces', precio: 50000, cantidad: 2},
    {id: 13, tipo: "Sonido", nombre: 'Master', precio: 15000, cantidad: 2},
    {id: 14, tipo: "Sonido", nombre: 'Promo Mezcla + Master Voz y Beat', precio: 65000, cantidad: 4},    
];

// Creacion de los productos en #catalogo__lista con su CSS
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>${producto.nombre}</h3> 
                            <p>${producto.tipo}</p>
                            <p class="catalogoListaPrecio">$ ${producto.precio}</p>
                            <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>`;

    document.querySelector("#catalogoLista").appendChild(contenedor);
}

// Agregar evento clic al botón "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
    const productoId = parseInt(event.target.getAttribute('data-id'));

    // Encontrar el producto en base a su ID
    const productoSeleccionado = productos.find(producto => producto.id === productoId);

    if (productoSeleccionado) {
        // lógica para agregar el producto al carrito
        // Por ahora, solo imprimiré un mensaje en la consola
        alert(`Producto agregado al carrito: ${productoSeleccionado.nombre}`);
        // También puedes actualizar la interfaz de usuario para reflejar el producto agregado al carrito
    } else {
        alert('Producto no encontrado');
    }
}

// // CARRITO PAGINA

// let tituloCarrito = document.getElementById("titulo__carrito")

// if ( nombre === "" || edad === "" ) {
//     tituloCarrito.innerText = "Bienvenido a tu carrito, " + datoNoIntroducido ;
// } else {
//     tituloCarrito.innerText = "Bienvenido a tu carrito, " + Persona.nombre; 
// }
// // tituloCarrito.innerText = "Bienvenido a tu carrito, " + Persona.nombre;

// let carrito = [];