// PUNTO 1

const lista = [1, 2, 3, 4, 5, 6];
const numero = 3;

const borrarValor = (numberList, number) => {
    return numberList.filter( listNumber => listNumber !== number) // devuelvo la nueva lista sin el valor 3
  }

const listaFiltrada = borrarValor(lista, numero)

console.log(listaFiltrada)

// PUNTO 3

function sumaRecursiva(arr) {
    if (arr.length == 0) {
        return 0
    }
    return arr[0] + sumaRecursiva(arr.slice(1))
}

const totalSuma = sumaRecursiva([1, 2, 3, 4, 5, 6])

console.log(totalSuma)
