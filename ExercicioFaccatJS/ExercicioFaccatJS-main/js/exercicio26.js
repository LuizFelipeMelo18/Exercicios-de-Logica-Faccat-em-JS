function executarExercicio26(){
    alert("26)  Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar  compra'. ")

    let quantidadeAtualEstoque = parseInt(prompt("Digite a quantidade atual no estoque"))
    let quantidadeMinimaEstoque = parseInt(prompt("Digite a quantidade minima do estoque"))
    let quantidadeMaximaEstoque = parseInt(prompt("Digite a quantidade maxima do estoque"))

    let quantidadeMediaEstoque = (quantidadeMaximaEstoque-quantidadeMinimaEstoque)/2

    if(quantidadeAtualEstoque>=quantidadeMediaEstoque){
        alert("Não efetuar compra")
    }else{
        alert("efetuar compra")
    }
}