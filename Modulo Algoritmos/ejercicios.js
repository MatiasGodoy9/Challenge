// PUNTO 1

let numeroPrimo = 0;
let esPrimo = true;

numeroPrimo = prompt('Ingrese un numero','')

for (let i = 2; i < numeroPrimo / 2; i++) {
    if (numeroPrimo % i === 0) {
        esPrimo = false;
    }
}

if (esPrimo) {
    console.log("Es un numero primo");
} else {
    console.log("No es numero primo");
}

// PUNTO 2

let pass = prompt('Ingrese una contraseña')
let intentos = 0;
let otraPass;

do {
    otraPass = prompt('Tiene 3 intentos para ingresar su contraseña');
    if (otraPass === pass)
    {
        alert("Felicitaciones, recordas tu contraseña");
        intentos = 3;
    } else
    {
        intentos = intentos + 1;
    }

} while(intentos<3)

if (pass != otraPass)
{
    alert("Tienes que ejercitar la memoria");
}

// PUNTO 3

let valorHora = prompt ('Ingrese el valor/hora del empleado')
let nombre = prompt ('Ingrese nombre del empleado')
let antiguedad = prompt ('ingrese antiguedad')
let horas = prompt ('ingrese horas trabajadas')
let importe = valorHora*horas;
let valorAntiguedad = 0;

if (antiguedad >= 10)
{
    valorAntiguedad = antiguedad * 30;
}

let total = importe+valorAntiguedad;

console.log('Empleado: ',nombre)
console.log('Años de antiguedad: ',antiguedad)
console.log('El total a cobrar es de: ',total)

// PUNTO 4

let min = 0;
let max = 1000;
let numeroUsuario = 0;
let numeroAleatorio = Math.floor(Math.random() * max);

console.log(numeroAleatorio)

do {
    numeroUsuario = prompt('Adivine el numero (entre 0 y 1000)')

    if (numeroAleatorio < numeroUsuario)
    {
        console.log('El numero es menor')
    } 
    else
    {
        console.log('El numero es mayor')
    }
} while(numeroAleatorio!=numeroUsuario)

alert('¡Felicitaciones!');

//PUNTO 5

