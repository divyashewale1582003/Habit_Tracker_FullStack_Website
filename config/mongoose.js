const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const mongoURI = process.env.MONGO_URI;
MONGO_URI = "mongodb://127.0.0.1:27017/Garden_App";
//   "mongodb://GodaWebsite:8ZnEzbXIHetlMSgG@ac-h6ar3ed-shard-00-00.5l09tnb.mongodb.net:27017,ac-h6ar3ed-shard-00-01.5l09tnb.mongodb.net:27017,ac-h6ar3ed-shard-00-02.5l09tnb.mongodb.net:27017/godaData?ssl=true&replicaSet=atlas-11q787-shard-0&authSource=admin&retryWrites=true&w=majority";

async function connectToMongo() {
  console.log("Connecting to Database ");
  try {
    let x = await mongoose.connect(MONGO_URI);
    console.log("Connected to Database: " + x.connections[0].name);
    return true;
  } catch (e) {
    // console.log(e);
    return false;
  }
}

module.exports = connectToMongo;