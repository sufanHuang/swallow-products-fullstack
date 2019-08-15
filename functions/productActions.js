const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const uuid = require('uuid/v4');
const _ = require('lodash')
const to = require('await-to-js').default

const productsTable = process.env.TABLE_NAME;

function createResponse(statusCode, message) {
    return {
        statusCode: statusCode,
        headers: {
           "Content-Type":"application/json",
           "Access-Control-Allow-Origin" : " *",
           "Access-Control-Allow-Credentials" : true
        },
        body: JSON.stringify(message)
    };
}
function sortByDate(future, past) {
    if (future.createdAt > past.createdAt) {
        return -1
    }
    return 1
}

module.exports = {
    createProduct: async (event) => {
        const productToCreate = _.attempt(JSON.parse, event.body)

        if(_.isError(productToCreate)) {
            return createResponse(400, 'Try again, but this time with correct json')
        }

        let fields = [ 'title', 'body' ]

        let results =_.map(fields, (currentField) => {
            return  !_.has(productToCreate, currentField) || _.get(productToCreate, currentField).trim() === ''
        })

        if (results.includes(true)) {
            return createResponse(400, {
                error: 'Product must have a title and body and they must not be empty'
            })
        }

        const product = {
            id: uuid(),
            createdAt: new Date().toISOString(),
            userId: 1,
            title: productToCreate.title,
            body: productToCreate.body
        };

        const parameters = {
            TableName: productsTable,
            Item: product
        }

        let [ error ] = await to(db.put(parameters).promise())

        if(error) {
            return createResponse(error.statusCode, error)
        }

        return createResponse(201, product)
    },

    getAllProducts: async () => {
        let parameters = {
            TableName: productsTable
        }

        let [ error, data ] = await to(db.scan(parameters).promise())

        if(error) {
            return createResponse(error.statusCode, error)
        }

        return createResponse(200, data.Items.sort(sortByDate))
    },

    getProduct: async (event) => {
        const id = _.get(event, 'pathParameters.id')

        const params = {
            Key: {
                id
            },
            TableName: productsTable
        }

        let [ error, item ] = await to(db.get(params).promise())

        if(error) {
            return createResponse(error.statusCode, error)
        }

        if(_.has(item, 'Item')) {
            return createResponse(200, item.Item)
        }

        return createResponse(404, { error: 'Product with specified id is not found'})
    },

    updateProduct: async (event) => {
        const id = _.get(event, 'pathParameters.id')
        const reqBody = JSON.parse(event.body);
        const { body, title } = reqBody;

        const parameters = {
            Key: {
                id: id
            },
            TableName: productsTable,
            ConditionExpression: 'attribute_exists(id)',
            UpdateExpression: 'SET title = :title, body = :body',
            ExpressionAttributeValues: {
                ':title': title,
                ':body': body
            },
            ReturnValues: 'ALL_NEW'
        }

        let [ error, response ] = await to(db.update(parameters).promise())

        if(error) {
            return createResponse(error.statusCode, error)
        }

        return createResponse(200, response.Attributes)
    },

    deleteProduct: async (event) => {
        const id = _.get(event, 'pathParameters.id')
        const parameters = {
            Key: {
                id: id
            },
            TableName: productsTable
        }

        let [ error ] = await to(db.delete(parameters).promise())

        if(error) {
            return createResponse(error.statusCode, error)
        }

        return createResponse(200, { message: 'Product deleted successfully' })
    }
}
