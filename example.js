const { Client } = require('@elastic/elasticsearch')
const esClient = new Client({ node: 'https://search-datastore-bwqnoiolhuolryg64rskdq7li4.us-east-1.es.amazonaws.com' })

const currentIndex = 'example-index'
const currentType = 'example-type'

module.exports = {
    add: async (body) => {
        let parameters = {
            index: currentIndex,
            type: currentType,
            body
        }

        return await esClient.index(parameters)
    },

    get: async (id) => {
        let parameters = {
            index: currentIndex,
            type: currentType,
            id
        }

        return await esClient.get(parameters)
    },

    update: async (id, body) => {
        let parameters = {
            index: currentIndex,
            type: currentType,
            body,
            id
        }

        return await esClient.index(parameters)
    },

    run: async () => {
        let data = {
            age: 12,
            female: true,
            name: 'FanFan'
        }

        let result = await module.exports.add(data)
        let recordId = result.body._id

        let updatedData = {
            age: 99,
            male: false,
            name: 'Lalalala'
        }

        await module.exports.update(recordId, updatedData)

        console.log('Received result id from adding:', recordId)

        result = await module.exports.get(recordId)

        console.log('Received GET call data: ', JSON.stringify(result.body._source))
    }
}
let onEvent = (data) => console.log(data)
module.exports.run().then(onEvent, onEvent)

