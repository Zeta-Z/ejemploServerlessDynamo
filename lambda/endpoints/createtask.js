const {v4 } = require('uuid')
const AWS = require('aws-sdk')
const Responses = require('../common/API_Respondes');

const handler = async(event)=>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {title, description } = JSON.parse(event.body);

    const createdAt = new Date()

    const id = v4()

    const newTask={
        id,
        title,
        description,
        createdAt,
        done: false,
    }
    await dynamodb.put({
        TableName: 'TaskTable2',
        Item: newTask
    }).promise()

    return Responses._200(newTask);

};

module.exports = {

    handler,
};