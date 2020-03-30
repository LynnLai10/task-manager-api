const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Yiling',
    //     age: 32,
    //     timestamp: id.getTimestamp()
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('user').insertOne(
    //     {
    //         description: 'test',
    //         completed: true
    //     }
    // , (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user.')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('user').findOne({ _id: new ObjectID("5e7b3c28bbf4f6243bda48c9")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // } )

    // db.collection('user').find({ completed: true }).toArray((error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })

    // db.collection('user').updateOne({
    //     _id: new ObjectID("5e7b3c28bbf4f6243bda48c9")
    // },{
    //     $set: {
    //         description: 'testabc'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

    // db.collection('user').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((e) => {
    //     console.log(e)
    // })

    // db.collection('user').deleteOne({
    //     description: 'test'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((e) => {
    //     console.log(e)
    // })

    db.collection('user').deleteMany({
        completed: true
    }).then((result) => {
        console.log(result)
    }).catch((e) => {
        console.log(e)
    })

})