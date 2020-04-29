// comando con el cual mongoDB tiene la auditoria sobre una base de datos utlizaldo node.js//

const { MongoClient } = require('mongodb');
const stream = require('stream');

async function main() {
    /**
     * 
     * 
     */
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    
    await monitorListingsUsingStreamAPI(client);
    /**
     * 
     * 
     */
    const client = new MongoClient(uri);

    try {
        //conexion  al cluster de mongoDB
        await client.connect();
        
       const result0 = await client.db("estudiante").collection("estudiante").updateOne({ _id: listingId }, { $set: updatedListing });
       console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        
       const result1 = await client.db("estudiante").collection("").insertOne(newListing);
       console.log(`New listing created with the following id: ${result.insertedId}`);
       
       const result2 = await client.db("sample_airbnb").collection("").deleteOne({ _id: listingId });
        
    } finally {
        // Cierre de la conexion con el cluster 
        await client.close();
    }
       

    
  
}

async function monitorListingsUsingStreamAPI(client, timeInMs = 60000, pipeline = []) { 
    
    const collection = client.db("escuela").collection("estudiante");
    
    const changeStream = collection.watch(pipeline);
    
    changeStream.pipe(
      new stream.Writable({
          objectMode: true,
          write: function (doc, _, cb) {
              console.log(doc);
              cb();
          }
       })
);
    await closeChangeStream(timeInMs, changeStream);
}


main().catch(console.error);
