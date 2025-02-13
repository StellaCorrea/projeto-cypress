//Arrow functions, elas são uma forma mais curta e moderna de escrever funções no JavaScript.

it('nada agora', function () { })

// function soma (a, b) {
//     return a + b;
// }

//  const soma = function (a, b) {
//     return a + b
//  }

// Aqui o exemplo da arrow function 

const soma = (a, b) => {
    return a + b

}
console.log(soma(1, 4))