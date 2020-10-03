const { ObjectID } = require('mongodb')
const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {

    const {id} = req.params
    
    const {client: MongoClient, closeConnectionFn} = await createMongoClient();
    const Customers = MongoClient.collection('customers');

    const res = await Customers.findOne({_id:ObjectID(id)})

    context.res = {
        status:200,
        body:res
    };
}