const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();
app.use(cors());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'practice1',
});

connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
  }
  console.log('Connected to MySQL');
});

app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM items', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log(results);
      res.json(results);

    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log('Server listening on port 3000');
});
