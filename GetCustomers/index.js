const createMongoClient = require('../shared/mongoClient')

module.exports = async function (context, req) {
    const {client: MongoClient, closeConnectionFn} = await createMongoClient();
    const Customers = MongoClient.collection('customers');
    const res = await Customers.find({});
    const body = await res.toArray();

    closeConnectionFn();
    context.res = {
        status: 200,
        body,
    }

}