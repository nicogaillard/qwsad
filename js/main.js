// Comienzo de la primer pre entrega JS
//Declarando variables
let nombreUsuario
let apellidoUsuario
let valor
let totalPrecio 
let tresCtasMyV = totalPrecio * 1.15
let seisCtasMyV = totalPrecio * 1.30
let tresCtasMax = totalPrecio * 1.10


//class constructora de objetos pc
class Componente{
    constructor(id, categoria, marca, nombre, precio){
    this.id = id,
    this.categoria =categoria,
    this.marca = marca,
    this.nombre = nombre,
    this.precio = precio
}
mostrarInfoComp(){
    console.log(`Este componente es de la categoría ${this.categoria}, es fabricado por la marca ${this.marca}, su nombre es ${this.nombre} y su precio es de $${this.precio}`)
}
}
//Creando objetos
const componente1 = new Componente(1, "Procesador", "Intel", "i5-7400", 72000)
const componente2 = new Componente(2, "Placa Madre", "MSI", "H-310M PRO VDH PLUS", 56000)
const componente3 = new Componente(3, "Memoria RAM", "HyperX", "8gb ddr4 3200hz", 18000)
const componente4 = new Componente(4, "Fuente", "Asus", "MAG 500W Reales", 45000)
const componente5 = new Componente(5, "Placa de Video", "Asus", "GTX 1060 6gb", 67500)
const componente6 = new Componente(6, "Disco Duro", "Western Digital", "1TB WD Blue", 32000)

//Creando el Array para los Componentes como Productos
const productos = [componente1, componente2, componente3, componente4, componente5, componente6]

//funcion agregar producto
function agregarProducto(){
    let categoriaIngresada = prompt("Ingrese la Categoria del producto")
    let marcaIngresada = prompt("Ingrese la Marca del producto")
    let nombreIngresado = prompt("Ingrese el Nombre del Producto")
    let precioIngresado = parseInt(prompt("Ingrese el Precio del Producto"))
    //Creando el objeto con los valores ingresados
    const componenteNuevo = new Componente(productos.length+1, categoriaIngresada, marcaIngresada, nombreIngresado, precioIngresado)
    componenteNuevo.mostrarInfoComp()
    console.log(componenteNuevo)
    //Agregando el objeto al array
    productos.push(componenteNuevo)
    console.log(productos)
}



//"Logueo" del usuario que determina si puede acceder al menú
logueo()
function logueo() {
    nombreUsuario = prompt("Ingrese su nombre")
    apellidoUsuario = prompt("Ahora ingrese su apellido")
    // Condicional respecto al "Logueo" anterior para acceder al menú
    if (((nombreUsuario != "" && apellidoUsuario != "") && (nombreUsuario != null && apellidoUsuario != null)) && (isNaN(nombreUsuario) && isNaN(apellidoUsuario))) {
        alert(`Bienvenido ${nombreUsuario} ${apellidoUsuario} a la tienda de componentes de PC.
A continuación le mostraremos una serie de opciones enumeradas.`)
        //llamado a la función menú
        menu()
    } else {
        alert("No ingresó correctamente Nombre y/o Apellido, vuelva a intentarlo.")
        //Llamado a funcion logueo para reingresar nombre y apellido
        logueo()
    }
}

//Funcion menú
function menu() {
    valor = prompt(`Ingrese un número según la opción a la que desee ingresar:
    1. Lista de componentes
    2. Agregar un componente
    3. 
    0. Salir del Menú`)

    while (valor != "0") {
        switch (valor) {
            case "1":
                console.log(productos)
                break
            case "2":
                agregarProducto()
                break
            case "3":
            
                break
            default:
                alert("ERROR, ingrese un número según corresponda")
                break
        }
        valor = prompt(`Ingrese un número según la opción a la que desee ingresar:
        1. Lista de componentes
        2. Estimador de costos
        3. Información extra
        0. Salir del Menú`)
    }
    alert("Gracias por visitar nuestro sitio.")
}































//  Funcion de calculo de año de jubilación

// function correr() {
//     let apellido = prompt("Por favor ingrese su Apellido")
//     let nombre = prompt("Ahora ingrese su nombre")
//     let edad = parseInt(prompt("¿Cuál es su edad?"))
//     let anioActual = 2023
//     let jubilacion = 65

//     let calculo = + jubilacion - + edad
//     let jubilo = + calculo + anioActual

//     alert("Hola "+ nombre + " " + apellido)
//     alert("Te vas a jubilar en el año " + jubilo)
// }