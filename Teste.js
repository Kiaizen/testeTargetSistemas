//  1

let indice = 13
let soma = 0
let k = 0

while (k < indice){
 k = k + 1

 soma = soma + k
}

console.log(soma)

// 2

function isFibonacci(num) {
    let num0 = 0;
    let num1 = 1;
  
    while (num0 <= num) {
      if (num0 === num) {
        return true;
      }
      let soma = num0 + num1;
      num0 = num1;
      num1 = soma;
    }
    return false;
  }
  
  console.log(isFibonacci(19))

  // 3
/*  1,3,5,7,7 + 2 = 9
2,4,8,16,32,64,64 * 2 = 128
0,1,4,9,16,25,36,7² = 49
4,16,36,64, 10² = 100
1,1,2,3,5,8,5+8 = 13
2,10,12,16,17,18,19,19-3 = 16 */

// 4
/* Desligo todos os interruptores, ligo 2, verifico as lâmpadas que ligaram, serão as lâmpadas a e b, a c é a que ainda está desligada, depois volto e desligo a a ou a b, a que desligar é a a b ou a b respectivamente */

// 5
function inverterString(texto){
  let txt = Array.from(texto)
  let invertido = []

  for(let i = txt.length -1;i >= 0;i--){
      invertido += txt[i]
  }
  console.log(invertido)
}

inverterString("Você")