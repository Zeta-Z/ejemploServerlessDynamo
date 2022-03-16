const AWS = require('aws-sdk');
const Responses = require('../common/API_Respondes');


const getTasks = async(event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'TaskTable2'

    }).promise()

    const tasks = result.Items;

    return Responses._200(tasks)


}


module.exports = {
    getTasks
}