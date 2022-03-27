const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db.js')

//middleware
app.use(express.json());
app.use(express.static('client/dist'));

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'moviesDB'
});

connection.connect();


/*-------------Routing---------------*/

//Where we have res.send(), whatever is inside that is sent to the client
//what if we put the movie into that res.send
app.get('/api/movies', (req, res) => {
  connection.query(
    'SELECT * FROM fakeData',
    function(err, results) {
      console.log(results);
      res.send(results)
    }
  );
})

app.post('/api/movies', (req, res) => {
  console.log('POSTING');
  console.log(req.body);
  connection.query(
    `INSERT INTO fakeData (title) VALUES(${req.body})`,
    function(err, results) {
      console.log(results);
    }
  )
  
  res.send(req.data);
  res.end();
})

app.get('/api/movies/search?term=', (req, res) => {
  db.connection.query()
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


