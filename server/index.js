import express from 'express';
import { MongoClient } from 'mongodb';
import { createServer } from 'node:http';

// MongoClient
const uri = "mongodb+srv://7e8jdev:J7VR39k1@demo.emnbjcx.mongodb.net/";
const client = new MongoClient(uri);

// Express server
const app = express()
const server = createServer(app)

app.use(express.json());
app.get('/user', async (req, res) => {
  try {
    await client.connect();

    const data = await client.db('demo').collection('user').find({}).toArray();

    client.close();

    res.json(data);
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูล' });
  }
})

// WebSocket client
io.on

const APP_PORT = 5555

server.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}`)
})