

let saludoIntro= "¡Hola! es un gusto";
let menorDeEdad= "Al ser menor te recomendamos que para comprar tengas el consentimiento de tus padres o un adulto a cargo de ti.";

// Introduccion datos - Nombre y Apellido
let nombreIntroducido = prompt("Introduce tu nombre:")
let apellidoIntroducido = prompt("Introduce tu apellido:")
let nombreCompleto = nombreIntroducido + " " + apellidoIntroducido ;

function saludoNombre () {
    if ((nombreIntroducido === "") || (apellidoIntroducido === "")){
        alert ("Completar datos solicitados porfavor");
    } else {
        alert ( saludoIntro + " " + nombreCompleto);
        let edadIntroducida = prompt("Introduce tu edad:");
        mensajeEdad(edadIntroducida);
    }    
}

// Introducción datos - Edad

function mensajeEdad(edad) {
    if ( edad === "") {
        alert("Introduzca su edad porfavor");
    } else if (edad >= 18){
        alert("Eres mayor de edad y puedes disfrutar del contenido completo de nuestra sitio.");
    } else {
        alert(menorDeEdad);
    }
}

saludoNombre();

//Valor Productos y Carrito

const productos = [
    {id: 1, tipo: "produccion completa", nombre: 'Produccion Completa Promo Apollo Full', precio: 155000, cantidad: 2},
    {id: 2, tipo: "produccion completa", nombre: 'Produccion Completa Promo Apollo', precio: 145000, cantidad: 4},
    {id: 3, tipo: "produccion completa", nombre: 'Produccion Completa Promo Akai', precio: 125000, cantidad: 2},
    {id: 4, tipo: "beats", nombre: 'Beat a Pedido', precio: 80000, cantidad: 4},
    {id: 5, tipo: "beats", nombre: 'Beat de Catalogo', precio: 50000, cantidad: 0},
    {id: 6, tipo: "beats", nombre: 'Beat Ofertas', precio: 30000, cantidad: 0},
    {id: 7, tipo: "grabacion", nombre: 'Grabacion de Voces Apollo', precio: 70000, cantidad: 3},
    {id: 8, tipo: "grabacion", nombre: 'Grabacion de Voces Apollo Maqueta', precio: 30000, cantidad: 1},
    {id: 9, tipo: "grabacion", nombre: 'Grabacion de Voces Akai', precio: 60000, cantidad: 3},
    {id: 10, tipo: "grabacion", nombre: 'Grabacion de Voces Akai Maqueta', precio: 20000, cantidad: 1},
    {id: 11, tipo: "sonido", nombre: 'Mezcla Beat', precio: 50000, cantidad: 2},
    {id: 12, tipo: "sonido", nombre: 'Mezcla de Voces', precio: 50000, cantidad: 2},
    {id: 13, tipo: "sonido", nombre: 'Master', precio: 15000, cantidad: 2},
    {id: 14, tipo: "sonido", nombre: 'Promo Mezcla + Master Voz y Beat', precio: 65000, cantidad: 4},    
];

let carrito = [];

function mostrarProductos() {
    let mensajeProductos = "Productos disponibles:\n";
    productos.forEach(producto => {
        mensajeProductos += `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Disponibles: ${producto.cantidad}\n`;
    });
    alert(mensajeProductos);
}
function agregarProductoAlCarro() {
    mostrarProductos(); 
    let agregarOtro = confirm("¿Deseas agregar otro producto al carrito?");
    if (agregarOtro) {
        let idProducto = Number(prompt("Introduce el ID del producto que deseas agregar al carrito:"));
        let productoElegido = productos.find(producto => producto.id === idProducto);
        if (productoElegido) {
            if (productoElegido.cantidad > 0) {
                carrito.push(productoElegido);
                productoElegido.cantidad--; // Restamos la cantidad disponible
                alert(`Se ha agregado ${productoElegido.nombre} al carrito.`);
                agregarProductoAlCarro(); // Llamada recursiva para agregar más productos
            } else {
                alert(`Lo siento, no hay más unidades disponibles de ${productoElegido.nombre}.`);
                agregarProductoAlCarro(); // Llamada recursiva para agregar más productos
            }
        } else {
            alert("No se encontró ningún producto con ese ID.");
            agregarProductoAlCarro(); // 
        }
    }
}

// Variable y Funcion para redirigir el mensaje y el producto a elegir

let productoIntroducido = prompt("¿Cual es el producto que buscas?Beat, Grabación o Producción Completa?");
productoIntroducido = productoIntroducido.toLowerCase();


function productoMensaje() {
    if ( productoIntroducido === "") {
        alert ("Elegir una de las opciones porfavor");
    } else if (( productoIntroducido === "beat" ) || ( productoIntroducido === "beats" )){
        const productosBeat = productos.filter(producto => producto.tipo === "beats");
        if (productosBeat.length > 0) {
            alert("Elegiste beat.\n\nProductos disponibles:\n" + 
                productosBeat.map(producto => `${producto.nombre}, Id: ${producto.id}, Precio: $${producto.precio}, Disponibles: ${producto.cantidad}`).join("\n")
            );
            let agregarAlCarrito = confirm("¿Deseas agregar algún producto al carrito?");
            if (agregarAlCarrito) {
               let idProducto = Number(prompt("Introduce el ID del producto que deseas agregar al carrito:"));
               let productoElegido = productos.find(producto => producto.id === idProducto);
               if (productoElegido) {
                   if (productoElegido.cantidad > 0) {
                       carrito.push(productoElegido);
                       productoElegido.cantidad--; 
                       alert(`Se ha agregado ${productoElegido.nombre} al carrito.`);
                   } else {
                       alert(`Lo siento, no hay más unidades disponibles de ${productoElegido.nombre}.`);
                   }
               } else {
                   alert("No se encontró ningún producto con ese ID.");
               }
            }
            let tuBeat = prompt("Cuéntame sobre tu proyecto, la referencia, su concepto, etc. y trataré de responderte lo más rápido posible para proceder a trabajar. Muchas gracias.");
            return tuBeat;
        } else {
            alert("Lo siento, no hay productos de tipo 'beat' disponibles.");
        }
    } else if (( productoIntroducido === "grabacion" ) || ( productoIntroducido === "grabación")){
        const productosGrabacion = productos.filter(producto => producto.tipo === "grabacion");
        if (productosGrabacion.length > 0) {
            alert("Elegiste grabacion.\n\nProductos disponibles:\n" + 
                productosGrabacion.map(producto => `${producto.nombre}, Id: ${producto.id}, Precio: $${producto.precio}, Disponibles: ${producto.cantidad}`).join("\n")
            );
            let agregarAlCarrito = confirm("¿Deseas agregar algún producto al carrito?");
            if (agregarAlCarrito) {
               let idProducto = Number(prompt("Introduce el ID del producto que deseas agregar al carrito:"));
               let productoElegido = productos.find(producto => producto.id === idProducto);
               if (productoElegido) {
                   if (productoElegido.cantidad > 0) {
                       carrito.push(productoElegido);
                       productoElegido.cantidad--; 
                       alert(`Se ha agregado ${productoElegido.nombre} al carrito.`);
                   } else {
                       alert(`Lo siento, no hay más unidades disponibles de ${productoElegido.nombre}.`);
                   }
               } else {
                   alert("No se encontró ningún producto con ese ID.");
               }
            }
            let tuGrabacion = prompt("Cuéntame sobre tu proyecto, la referencia, su concepto, etc. y trataré de responderte lo más rápido posible para proceder a trabajar. Muchas gracias.");
            return tuGrabacion;
        } else {
            alert("Lo siento, no hay productos de tipo 'grabacion' disponibles.");
        }
    } else if (( productoIntroducido === "produccion completa" ) || ( productoIntroducido === "producción completa")){
        const productosProduccion = productos.filter(producto => producto.tipo === "produccion completa");
        if (productosProduccion.length > 0) {
            alert("Elegiste produccion completa.\n\nProductos disponibles:\n" + 
                productosProduccion.map(producto => `${producto.nombre}, Id: ${producto.id}, Precio: $${producto.precio}, Disponibles: ${producto.cantidad}`).join("\n")
            );
            let agregarAlCarrito = confirm("¿Deseas agregar algún producto al carrito?");
            if (agregarAlCarrito) {
               let idProducto = Number(prompt("Introduce el ID del producto que deseas agregar al carrito:"));
               let productoElegido = productos.find(producto => producto.id === idProducto);
               if (productoElegido) {
                   if (productoElegido.cantidad > 0) {
                       carrito.push(productoElegido);
                       productoElegido.cantidad--; 
                       alert(`Se ha agregado ${productoElegido.nombre} al carrito.`);
                   } else {
                       alert(`Lo siento, no hay más unidades disponibles de ${productoElegido.nombre}.`);
                   }
               } else {
                   alert("No se encontró ningún producto con ese ID.");
               }
            }
            let tuProduccion = prompt("Cuentame sobre tu proyecto, si ya tienes alguna maqueta, alguna referencia, su concepto, etc. y te intentare responder lo mas rápido para proceder a trabajar. Muchas gracias.");
            return tuProduccion;
        } else {
            alert("Lo siento, no hay productos de tipo 'produccion completa' disponibles.");
        }
    }


}

productoMensaje();

// creando funcion para comprobar el carrito

function verCarro () {
    let objetosCarro = confirm("¿Deseas ver el carro?");
    if (objetosCarro) {
        if (carrito.length > 0) {
            let mensaje = "Productos en el carrito:\n";
            let total = 0; 
            carrito.forEach(producto => {
                mensaje += `${producto.nombre} - Precio: $${producto.precio}\n`;
                total += producto.precio; 
            });
            mensaje += `Total: $${total}`;
            alert(mensaje);
        } else {
            alert("El carrito está vacío.");
        }
    }
}

verCarro ();

agregarProductoAlCarro();

verCarro();





