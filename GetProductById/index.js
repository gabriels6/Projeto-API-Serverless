const { Obj, ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {
    const { id } = req.params;

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findOne({_id:ObjectID(id)});
    

    closeConnectionFn()
    //Retornar o valor
    context.res = {
        status:200,
        body: res,
    }
};