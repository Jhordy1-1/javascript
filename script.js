// //Indice de masa corporal
// let altura = 1.5
// let peso =65
// let icm= (peso/altura**2).toFixed(2)
// document.write("El indice de masa corporal es: "+icm + "<br>")

// //Operaciones

// let num1= parseInt(prompt("Ingresa el primer numero:"))
// let num2= parseInt(prompt("Ingresa el segundo numero:"))
// let num3= parseInt(prompt("Ingresa el tercer numero:"))
// document.write("La suma es igual: " + (num1 + num2) + "<br>")
// document.write("La resta es igual: " + (num1 - num2) + "<br>")
// document.write("La multiplicacion es igual: " + (num1 * num2) + "<br>" )
// document.write("La divison es igual: " + (num1 / num2).toFixed(2) + "<br>")

// //pedir dos numeros y verificar si son multiplos
// if( num1%num2==0 || num2%num1==0 ){
//     document.write("Los numeros: "+num1 +" "+num2 +" multiplos" + "<br>")
// }else{
//     document.write("Los numeros: "+num1 +" "+num2 +" no son multiplos" + "<br>")
// }

// //Pedir 3 numero y decir cual es el mayor y cual es el menor
// let mayor = null
// let menor = 0
// if(num1>num2 && num1>num3){
//     mayor = num1
// }

// if(num2>num1 && num2>num3){
//     mayor = num2
// }

// if(num3>num1 && num3>num2){
//     mayor = num3
// }

// if(num1<num2 && num1<num3){
//     menor = num1
// }

// if(num2<num1 && num2<num3){
//     menor = num2
// }

// if(num3<num1 && num3<num2){
//     menor = num3
// }

// document.write("El numero mayor es: "+mayor + "<br>")
// document.write("El numero menor es: "+menor + "<br>")

// //Ingresar una nota y mostrar si la nota es de 9 a 10 un mensaje 
// let nota = parseFloat(prompt("Ingresa la nota numero:"))
// let asignatura= prompt("Ingresa la asignatura:")
// let mensaje
// if(nota>9){
//     mensaje = "Felicidades ust aprobo la asignatura " + asignatura + " con " + nota +" excelente"
// }else if (nota>8){
//     mensaje = "Aprobo la asignatura "+ asignatura + " con " +nota +" muy buena"
// }
// else if (nota>7){
//     mensaje = "Aprobo la asignatura "+ asignatura + " con " +nota +" buena"
// }else{
//     mensaje = "Reprobo la asignatura "+ asignatura + " con " +nota
// }
// document.write(mensaje)

// //En un restaurante puden pedir un menu carne pescado o verduras
// // carne o pescado se ofrece bebida vino tinto o blanco
// // verdudas vino blanco o aguas sin gas
// // porafvor ingrese un plato del menu
// let menu= prompt("Ingresa el nombre del plato: \n-carne \n-pescado  \n-verduras ")
// let bebida =null
// switch (menu) {
//     case "carne":
//     case "pescado":
//         bebida=prompt("Selecciones su bebida puede ser vino: \n-tinto \n-blanco")
//         switch (bebida) {
//             case "tinto":
//                 bebida= "vino tinto"
//                 break;
//             case "blanco":
//                 bebida= "vino blanco"
//                 break;
//             default:
//                 document.write("Selecione entre tinto o blanco")
//                 break;
//         }
//         break;
//     case "verduras":
//         bebida=prompt("Selecciones su bebida puede ser \n-vino blanco o \n-agua sin gas")
//         switch (bebida) {
//             case "agua":
//                 bebida= "agua sin gas"
//                 break;
//             case "vino blanco":
//                 bebida= "vino blanco"
//                 break;
//             default:
//                 document.write("Selecione entre agua o vino blanco")
//                 break;
//         }
//         break;
//     default:
//         document.write("Selecciones un plato del menu: pescado, carne o verduras")
//         break;
// }

// if(bebida){
//     document.write("Su seleccion es: " +menu + " con "+bebida)
// }

// let numero= parseInt(prompt("Escribe un numero del 1 al 12 para crear la tabla:"))
// let contador = 1
// document.write("Tabla del "+ numero + "<br>")
// while(contador<13){
//     document.write(numero +" * "+ contador +" = " +numero*contador +"<br>")
//     contador++   
// }
// user= prompt("Usuario:")
// pass= prompt("Contraseña:")

// usuario = "usuario"
// contra = "cotra"

// for (let i = 0; i < 3; i++) {
//     if(user == usuario && pass == contra){
//         document.write("Bienvenido al sistema")
//     }else{
//         user= prompt("Usuario:")
//         pass= prompt("Contraseña:")

//     }
    
// }

// //Escribir
// let numero= parseInt(prompt("Ingrese un numero:"))

// for (let i = 0; i < 100; i+=numero) {
//     console.log(i+"\n")
//     document.write(i+"<br>")
    
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         document.write("* ")
    
//     }
//     document.write("<br>")
    
// }


// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= i; j++) {
//         document.write("* ")
//     }
//     document.write("<br>")
    
// }

// function encontrarCuadrado(num){
//     return num**2
// }

// function factorial(num){
//     let result = 1
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result
// }
// let cuadrado= parseInt(prompt("Ingrese Un numero:"))
// document.write("El factorial es:"+factorial(cuadrado))

var colors = ["rojo", "verde", "azul"];

console.log(colors[0]); // Output: "rojo"
console.log(colors[1]); // Output: "verde"
console.log(colors[2]); // Output: "azul"

console.log(colors.length); // Output: 3

console.log(colors.indexOf("rojo")); // Output: 0

console.log(colors.lastIndexOf("azul")); // Output: 2

console.log(colors.includes("verde")); // Output: true

console.log(colors.concat(["amarillo", "morado"])); // Output: ["rojo", "verde", "azul", "amarillo", "morado"]

console.log(colors.join(", ")); // Output: "rojo, verde, azul"

console.log(colors.reverse()); // Output: ["azul", "verde", "rojo"]

console.log(colors.slice(1, 2)); // Output: ["verde"]

console.log(colors.splice(1, 0, "amarillo")); // Output: ["rojo", "amarillo", "verde", "azul"]
const numbers = [1, 2, 3, 4, 5];

numbers[2] = 10; // Cambia el elemento en el índice 2 a 10

console.log(numbers); // Output: [1, 2, 10, 4, 5]

let num = 12345.6789;
let expForm = num.toExponential(2); // 2 es el número de decimales después del punto
console.log(expForm); // Salida: "1.23e+4"

num = 123.456;
let fixedForm = num.toFixed(2); // 2 es el número de decimales después del punto
console.log(fixedForm); // Salida: "123.46"

num = 123.456;
let preciseForm = num.toPrecision(5); // 5 es el número total de dígitos
console.log(preciseForm); // Salida: "123.46"

num = 255;
let strForm = num.toString(16); // 16 es la base (hexadecimal)
console.log(strForm); // Salida: "ff"

let str = "ff";
let intForm = parseInt(str, 16); // 16 es la base (hexadecimal)
console.log(intForm); // Salida: 255

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  
num = 10;
console.log(`Fibonacci de ${num} es: ${fibonacci(num)}`);