

function obterUsuario () {
    // quando der algum problema -> rejec(erro )
    // quando sucess -> resolve 
    return new Promise ( function resolverPromise (resolve, resect ) {

        setTimeout( () =>  {
            return resolve({
                id:1,
                nome:'Diego',
                dataNascimento: new Date()
            })
        } , 1000) 
      })
    }

  function obterTelefone (idUsuario){
      return new Promise(function resolverPromise (resolve, reject ) {

          setTimeout( () => {
              return resolve( {
                  telefone:"110298283",
                  ddd:11
              })
          }, 2000)
    })
  }

  function obterEndereco(isUsuario  ){
    
        return new Promise ( function resolverTelefone(resolve, result ){
         setTimeout ( ( ) => {
             return resolve ( {
                rua:'pedra lavrada ',
             })
         }, 3000)
        })

  }

main()
  async function main() {
      try {
          console.time('medida')
          const usuario = await obterUsuario()
        //   const telefone = await obterTelefone(usuario.id)
        //   const endereco = await obterEndereco(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
          console.log(`
          Nome: ${usuario.nome},
          Nome: ${telefone.telefone},
          Nome: ${endereco.rua},
          `)
          console.timeEnd('medida')

      }catch (erro) {
        console.log('Deu ruin ')
      }
  }

// const  usuarioPromise   = obterUsuario()
//   // para manipular o sucesso usmos a funcao .then 
//   // para manipular erro usamos o cat 

//   usuarioPromise.then( function (usuario) {
//       return obterTelefone (usuario.id)
//         .then( function resolverTelefone(result) {
//             console.log("=====================")
//             return {
//                 usuario: {
//                     nome:usuario.nome,
//                     id:usuario.id
//                 },
//                 telefone: {
//                     telefone:result
//                 }
//             }
//         }).then( function (resultado) {
//             const endereco = obterEnderecoAsync( resultado.usuario.id)
//             return endereco.then(function resolverEndereco(result) {
//                 return {
//                     usuario:resultado.usuario,
//                     telefone:resultado.telefone,
//                     endereco: result
//                 }
//             })
//         })
//         .then( function (resultado) {
//             console.log('resultado', resultado)
//         })
//   }).catch( function (error) {
//       console.log('erro usuario ', erro)
//   })