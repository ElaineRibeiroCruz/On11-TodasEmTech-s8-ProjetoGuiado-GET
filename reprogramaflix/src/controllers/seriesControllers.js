const series = require("../models/series.json")

const getAll = (request, response)=>{
    response.status(200).send(series)

}

const getById =(request, response)=>{
    const idRequerido = request.params.idRequerido
    
  response.status(200).json(series.find(series => series.id == idRequerido))

}

const getByTitle = (request, response)=>{
    const titulo = request.query.titulo.toLowerCase()
    const serieFiltrada = series.find(serie => serie.title.toLowerCase().includes(titulo))

    console.log(titulo)
    console.log(serieFiltrada)

    if( serieFiltrada == undefined){
        response.status(400).json([{
            "mensagem":"digite um título válido (escreva corretamente)"
        }])

    }else{response.status(200).send(serieFiltrada)}
    


  }
  

  


module.exports = {
    getAll,
    getById,
    getByTitle
   
   
}