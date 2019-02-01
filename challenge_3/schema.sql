
CREATE DATABASE user;

-- DROP DATABASE user;

CREATE TABLE accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password VARCHAR(50) NOT NULL,
  line1 TEXT NOT NULL,
  line2 TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipcode INT NOT NULL,
  phone INT NOT NULL,
  Card INT NOT NULL,
  ExpDate INT NOT NULL,
  Cvv INT NOT NULL,
  BillZip INT NOT NULL
)

INSERT INTO accounts (name, email, password, line1, line2, city, state, zipcode,
phone, Card, ExpDate, Cvv, BillZip) VALUES ('Ryan', 'Cow', 'lax', '123 toadStool St.',
'apt. 42069', 'San Francisco', 'CA', 96161, 8675309, 413828822, 0420, 222, 96161);
