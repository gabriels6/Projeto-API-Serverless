const { Obj, ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {

    const {id} = req.params
    const customer = req.body
    
    const {client: MongoClient, closeConnectionFn} = await createMongoClient();
    const Customers = MongoClient.collection('customers');  

    const res = await Customers.findOneAndUpdate(
        {_id:ObjectID(id)},
        {$set: customer},)

    context.res = {
        status:200,
        body:res
    };
}