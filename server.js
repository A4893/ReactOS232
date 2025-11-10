import express from "express";
var app= express();
import router from "./server/routes/assets-router.js";

//Start
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://zlaanahmedwnrzr_db_user:6xhm4qaENmGJrFbu@cluster123.0fbdvtn.mongodb.net/Skeleton?retryWrites=true&w=majority&appName=Cluster123";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("Portfolio");

// Create users collection
await db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "created", "updated"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        password: { bsonType: "string" },
        created: { bsonType: "date" },
        updated: { bsonType: "date" }
      }
    }
  }
});

//contacts collection
await db.createCollection("Contacts",{
  validator:{
    $jsonSchema: {
      bsonType:"object",
      required:["firstname","lastname","email"],
      properties:{
        firstname:{bsonType: "string"},
        lastname: {bsonType: "string"},
        email: {bsonType: "string"}
      }
    }
  }
});

//project collection
await db.createCollection("Project",{
  validator:{
    $jsonSchema: {
      bsonType:"object",
      required:["title","firstname","lastname","email","completion","description"],
      properties:{
        title:{bsonType:"string"},
        firstname:{bsonType:"string"},
        lastname:{bsonType:"string"},
        email:{bsonType:"string"},
        completion:{bsonType:"date"},
        description:{bsonType:"string"},
      }
    }
  }
});

await db.createCollection("education",{
  validator:{
    $jsonSchema:{
      bsonType:"object",
      required:["title","firstname","lastname","email","completion","description"],
      properties:{
        title:{bsonType:"string"},
        firstname:{bsonType:"string"},
        lastname:{bsonType:"string"},
        email:{bsonType:"string"},
        completion:{bsonType:"date"},
        description:{bsonType:"string"},
      }
    }
  }
});





console.log("All collections with validation created successfully.");

const collections = await db.listCollections().toArray();
console.log(collections);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
//End

app.use("/",function(req,res){
    res.send({"message" : "Welcome to my portfolio application. "});
});

app.use("/src", router);


app.listen(3000);
console.log("server is running at localhost3000");
export default app;