const {MongoClient} = require('mongodb')
const config = {
    url: 'mongodb+srv://db_test_user:hlm2543V@cluster-test.q4jsk.gcp.mongodb.net/test_data?retryWrites=true&w=majority'
};

module.exports = () => new Promise((resolve,reject) =>{
    MongoClient
    .connect(config.url, {useNewUrlParser: true,useUnifiedTopology:true}, (err,mongoConnection) =>{
        err
        ? reject(err)
        : resolve({
            client:mongoConnection.db(config.dbName),
            closeConnectionFn: () => setTimeout(() => {
                mongoConnection.close();
            }, 1000),
            mongoConnection,
        })
        
    })
})