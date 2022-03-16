const AWS = require("aws-sdk");

const updateTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { ID } = event.pathParameters;

  const { done,title,description } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: "TaskTable2",
      Key: { id: ID },
      UpdateExpression: "set done = :done, title = :title, description = :description",
      ExpressionAttributeValues: {
        ":done": done,
        ":title": title,
        ":description": description,
      },
      ReturnValues: "UPDATED_NEW",
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "task updated",
    }),
  };
};

module.exports = {
  updateTask,
};