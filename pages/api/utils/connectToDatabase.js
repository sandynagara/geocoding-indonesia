import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

export async function connectToDatabase() {
    // check the cached.
    mongoose.connect(process.env.MONGODB_URI, function(err) {
        if (err) {
          console.error(err);
        }
        console.log('connected.... unless you see an error the line before this!');
    });
}