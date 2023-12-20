function ordenarVetor(vetor) {
  var troca;
  do {
    troca = false;
    for (var i = 0; i < vetor.length - 1; i++) {
      if (vetor[i] > vetor[i + 1]) {
        var temp = vetor[i];
        vetor[i] = vetor[i + 1];
        vetor[i + 1] = temp;
        troca = true;
      }
    }
  } while (troca);
}

function main() {
  var vetor = [];

  for (var i = 0; i < 10; i++) {
    var numero = parseFloat(prompt('Digite o ' + (i + 1) + 'º número:'));
    vetor.push(numero);
  }

  ordenarVetor(vetor);
  console.log('Vetor ordenado em ordem crescente: ' + vetor);
}
main();
