const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getAllUsers, addUser } = require('./db.js');

const app = express();
const PORT = 6969;


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

// app.get('/users', (req, res) => {
//   console.log('getting users');
//   getAllUsers((err, rows) => {
//     if (err) {
//       res.status(400).send();
//       return;
//     }
//     res.status(200).send(rows);
//   })
// })

app.post('/users', (req, res,) => {
  console.log('posting users');
  addUser(req.body, (err) => {
    if (err) {
      res.status(400).send(err)
      return;
    }
    res.status(201).send(req.body);
  })
})


app.listen(PORT, () => {
  console.log(`NOW LISTENING ON PORT ${PORT}`)
});