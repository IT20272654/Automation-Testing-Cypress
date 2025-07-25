const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4000;
require('dotenv').config()
//console.log(process.env.DB_USER) 
//console.log(process.env.DB_PASSWORD)
// remove this after you've confirmed it is working


//middleware
app.use(express.json())
app.use(cors())




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-recruitment-api.lvv2jwx.mongodb.net/?retryWrites=true&w=majority`;

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

    //create db
    const db = client.db("jobRecruitment");
    const jobCollection = db.collection("demoJobs");

    //post a job
    app.post("/post-job", async(req,res) => {
      const body = req.body;
      body.createAt = new Date();
      //console.log(body)
      const result = await jobCollection.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }else{
        return res.status(404).send({
          message: "Can not insert!! Try again later...",
          status: fales
        })
      }
    })

    //get all jobs
    app.get("/all-jobs", async(req,res) => {
      const job = await jobCollection.find({}).toArray()
      res.send(job)
    })
    //get single job using id
    app.get("/all-jobs/:id", async(req, res) => {
      const id =req.params.id;
      const job = await jobCollection.findOne({
      _id: new ObjectId(id)
      })
      res.send(job)
      })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}




run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Boys!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})