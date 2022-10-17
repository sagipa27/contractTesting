const newman = require('newman')
newman.run({
    collection: require('./API.postman_collection.json'),
    reporters: 'cli',
})