// const velas = [3 ,2, 1, 3];

// for(let i = 0; i< velas.length; i++){
//    let valor = i.value
//     console.log(valor)
// }

// // Utilizando uma função tradicional
// const numerosDobrados = numeros.map(function(velas) {
//   if(velas)
// });

// console.log(numerosDobrados); 

// const velasMaisAltas = Math.max(...velas);

// Definindo a função birthdayCakeCandles que recebe um array de alturas de velas
function birthdayCakeCandles(candles) {
    // Encontrando a altura máxima das velas usando Math.max
    const alturaMaxima = Math.max(...candles);
  
    // Utilizando o método filter para criar um novo array contendo apenas as velas com a altura máxima
    const velasAltas = candles.filter(function(c) {
      return c === alturaMaxima;
    });
  
    // Retornando o número de velas mais altas, que é o comprimento do array velasAltas
    return velasAltas.length;
  }
  
  // Exemplo de uso
  const alturaDasVelas = [3, 2, 1, 3];
  const resultado = birthdayCakeCandles(alturaDasVelas);
  
  // Imprimindo o resultado no console
  console.log(resultado); // Saída: 2
  