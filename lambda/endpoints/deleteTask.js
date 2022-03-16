const AWS = require('aws-sdk')

const deleteTask = async (event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {ID} = event.pathParameters;
    await dynamodb.delete({
        TableName: 'TaskTable2',
        Key: {
            id: ID
        }
    }).promise();

    return{
        status: 200,
        body:{
            message:"Taks Deleted",
        }
    }


}



module.exports= {
    deleteTask
}