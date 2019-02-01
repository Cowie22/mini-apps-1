const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user'
});

connection.connect();

var getAllUsers = (callback) => {
  connection.query('SELECT * FROM accounts', (err, rows) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, rows);
  })
};


var addUser = (user, callback) => {
  var queryStr = `INSERT INTO accounts (name, email, password, line1, line2, city,
  state, zipcode, phone, Card, ExpDate, BillZip)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  var params = [user.name, user.email, user.password, user.line1, user.line2, user.city, user.state, user.zipcode, user.phone, user.Card,user.ExpDate, user.BillZip];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  })
};


module.exports.connection = connection;
module.exports.getAllUsers = getAllUsers;
module.exports.addUser = addUser;