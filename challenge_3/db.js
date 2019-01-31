const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'user'
});

connection.connect();

const addUser = (user, callback) => {
  var query = "INSERT INTO accounts (name, email, password, line1, line2, city, state, zipcode, phone, Card, ExpDate, BillZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var params = [user.name, user.email, user.password, user.line1, user.line2, user.city, user.state, user.zipcode, user.phone, user.Card, user.ExpDate, user.BillZip];
  connection.run(query, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  })
}

module.exports.connection = connection;
module.exports.addUser = addUser;