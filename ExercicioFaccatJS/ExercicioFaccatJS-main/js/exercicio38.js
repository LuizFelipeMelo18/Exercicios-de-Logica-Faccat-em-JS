function executarExercicio38(){
    alert("38)  Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código  armazenado  internamente  no  algoritmo  (igual  a  1234)  deve  ser  apresentada  a mensagem Usuário inválido!. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa  é 9999) deve ser mostrada a mensagem senha incorreta. Caso a senha esteja correta, deve ser mostrada a mensagem Acesso permitido. ")

    let codigoUsuario = prompt("Digite o codigo do usuario")
    let senha = "" 
    if( codigoUsuario == '1234'){
        senha = prompt("Digite sua senha")
        if(senha=='9999'){
            alert("Acesso permitido")
        }else{
            alert("Senha incorreta")
        }
    }else{
        alert('Usuario invalido')
    }
}