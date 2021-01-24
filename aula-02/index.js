const util =require ('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

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

  function obterEndereco(isUsuario , callback ){
    setTimeout( () => {
        return callback( null , {
            rua: 'pedra lavrada'
        })
    },3000)
  }

const  usuarioPromise   = obterUsuario()
  // para manipular o sucesso usmos a funcao .then 
  // para manipular erro usamos o cat 

  usuarioPromise.then( function (usuario) {
      return obterTelefone (usuario.id)
        .then( function resolverTelefone(result) {
            console.log("=====================")
            return {
                usuario: {
                    nome:usuario.nome,
                    id:usuario.id
                },
                telefone: {
                    telefone:result
                }
            }
        }).then( function (resultado) {
            const endereco = obterEnderecoAsync( resultado.usuario.id)
            return endereco.then(function resolverEndereco(result) {
                return {
                    usuario:resultado.usuario,
                    telefone:resultado.telefone,
                    endereco: result
                }
            })
        })
        .then( function (resultado) {
            console.log('resultado', resultado)
        })
  }).catch( function (error) {
      console.log('erro usuario ', erro)
  })