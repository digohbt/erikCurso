  /*
      
  */

  function obterUsuario ( callback) {
    setTimeout( () =>  {
        return callback(null, {
            id:1,
            nome:'Diego',
            dataNascimento: new Date()
        })
    } , 1000) 
  }

  function obterTelefone (idUsuario, callbak ){
    setTimeout( () => {
        return callbak(null, {
            telefone:"110298283",
            ddd:11
        })
    }, 2000)
  }

  function obterEndereco(isUsuario , callback ){
    setTimeout( () => {
        return callback( null , {
            rua: 'pedra lavrada'
        })
    },3000)
  }

  obterUsuario( function resolverUsuario(erro, usuario) {
     if(erro) {
         console.log('Deu Ruim em Usuario', error)
        return;
     }

     obterTelefone( usuario.id , function resolverTelefone (erro1, telefone) {

        if(erro1) {
            console.log('Deu Ruim em telefone', error)
           return;
        }
        obterEndereco( usuario.id, function resolverEndereco (erro3, endereco ) {

            if(erro3) {
                console.log('Deu Ruim em telefone', error)
               return;
            }
            console.log( `
            Nome : ${usuario.id},
            telefone : ${telefone.telefone},
            endereco : ${endereco.rua},
        `)
        })
        
        })
        
     })
    

// obterUsuario(function resolverUsuario(erro, usuario){

// } )


//   const telefone = obterTelefone
//   console.log(usuario)

