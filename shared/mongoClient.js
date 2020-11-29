const {MongoClient} = require('mongodb')
const config = {
    url: 'MONGO_CONNECTION_HERE'
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
