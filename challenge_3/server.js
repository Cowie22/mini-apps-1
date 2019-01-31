const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db.js');

const app = express();
const PORT = 6969;


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

app.post('/user', (req, res,) => {
  db.addUser(req.body, (err) => {
    if (err) {
      res.status(400).send()
      return;
    }
    res.status(200).send();
  })
})


app.listen(PORT, () => {
  console.log(`NOW LISTENING ON PORT ${PORT}`)
});