const createMongoClient = require('../shared/mongoClient')
const {ObjectID} = require('mongodb');

module.exports = async function (context, req) {

    const { id } = req.params

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findOneAndDelete({_id:ObjectID(id) })
    context.res = {
        status: 200,
        body: res,
    }
}