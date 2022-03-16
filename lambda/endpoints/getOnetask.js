const AWS = require('aws-sdk')
const Responses = require('../common/API_Respondes');


const getOneTask = async (event) =>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {ID} = event.pathParameters
    const result = await dynamodb.get({
        TableName: 'TaskTable2',
        Key: {
            id: ID
        }
    }).promise()

    const task = result.Item;

    return Responses._200(task);

};

module.exports = {
    getOneTask,
};