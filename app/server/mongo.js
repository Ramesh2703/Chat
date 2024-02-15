const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

//..............................................................................................
const http=require("http");
const {Server}=require("socket.io");

const socket=http.createServer(app);
const io= new Server(socket,{
cors:{
  origin:"http://localhost:3000",
  methods:["GET","POST"],
}
});
let msg=[];
let count = 1;
io.on("connection",(socket)=>{
  console.log(`user id : ${socket.id}`);
  socket.on("admin",(data)=>{
      const newmessage={
      id:count++,
      text:data.input
    };
    msg.push(newmessage);
    console.log(msg);
  });
});

app.get('/api/admin',(req,res)=>{
  try{
  res.json(msg);
  msg=[];
  }
  catch(err){
    console.error('Error handling GET request:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/user', async (req, res) => {
  try {
    const postData = req.body;
    let list=postData.userMessage;
    console.log(list);
    io.emit('user',{list});
  } catch (err) {
    console.error('Error inserting data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

socket.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
//..............................................................................................

// connectToMongoDB(); 
// const uri ='mongodb+srv://root:0000@cluster0.cbmwm2h.mongodb.net/?retryWrites=true&w=majority';
// const client = new MongoClient(uri);

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// async function getMongoDBData() {
//   try {
//     const dbName = 'test';
// const collectionName = 'item';
//     const database = client.db(dbName);
//     const collection = database.collection(collectionName);
//     const data = await collection.find({}).toArray();
//     return data;
//   } catch (err) {
//     console.error('Error querying MongoDB:', err);
//     return [];
//   }
// }
// app.get('/api/data', async (req, res) => {
//   try {
//     const mongoDBData = await getMongoDBData();
//     console.log(mongoDBData);
//     res.json(mongoDBData);
//   } catch (err) {
//     console.error('Error serving MongoDB data:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//    }
//  });
// async function insertDataIntoMongoDB(data) {
//   try {
//     const database = client.db('testinsert');
//     const collection = database.collection('message');
//     const result = await collection.insertOne(data);
//     console.log('Data inserted successfully:', result.ops);
//     return result;
//   } catch (err) {
//     console.error('Error inserting data into MongoDB:', err);
//     return null;
//   }
// }
