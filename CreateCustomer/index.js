const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {
    
    const customer = req.body

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Customers = MongoClient.collection('customers');

    const res = await Customers.insert(customer);

    context.res = {
        status: 201,
        body: res
    };
}