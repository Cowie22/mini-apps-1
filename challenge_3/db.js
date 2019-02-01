const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'user'
});

connection.connect();

// var getAllUsers = (callback) => {
//   connection.query('SELECT * FROM accounts', (err, rows) => {
//     if (err) {
//       callback(err);
//       return;
//     }
//     callback(null, rows);
//   })
// };


var addUser = (userInfo, callback) => {
  var queryStr = `INSERT INTO accounts (name, email, password, line1, line2, city,
  state, zipcode, phone, Card, ExpDate, Cvv, BillZip)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  var params = [userInfo.name, userInfo.email, userInfo.password, userInfo.line1, userInfo.line2, userInfo.city, userInfo.state, Number(userInfo.zipcode), Number(userInfo.phone), Number(userInfo.Card), Number(userInfo.ExpDate), Number(userInfo.Cvv), Number(userInfo.BillZip)];
  connection.query(queryStr, params, (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  })
};


module.exports = {
  connection, addUser
};