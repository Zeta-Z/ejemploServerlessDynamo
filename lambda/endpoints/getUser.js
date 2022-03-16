const Responses = require('../common/API_Respondes')
exports.handler = async event =>{
    console.log('event',event)

    if(!event.pathParameters || !event.pathParameters.ID){
        // Error con el ID
        return Responses._400({message: 'Missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        // Regresa info 
        return Responses._200(data[ID]);
    }

    //Error, id no encontrado
    return Responses._400({message: 'No ID in data buddy'});

}

const data ={
    1234: {name: 'Luis Felipe', age: 22, job: 'Dev'},
    7893: {name: 'Julie', age: 23, job: 'AtencionUsuario'},
    5132: {name: 'Nuñez', age: 22, job: 'Mesero'},
}