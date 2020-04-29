// comando con el cual mongoDB tiene la auditoria sobre una base de datos utlizaldo node.js//

const { MongoClient } = require('mongodb');
const stream = require('stream');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See http://bit.ly/NodeDocs_lauren for more details
     */
    const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See bit.ly/Node_MongoClient for more details
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}
async function monitorListingsUsingStreamAPI(client, timeInMs = 60000, pipeline = []) { 
    
}


main().catch(console.error);
