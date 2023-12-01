const bcrypt = require('bcryptjs');

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: "123456",
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: "123456",
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: "123456",
    isAdmin: false,
  },
];

Promise.all(
  users.map((user) =>
    bcrypt.hash(user.password, 10).then((hash) => {
      user.password = hash;
      return user;
    })
  )
).then((users) => {
  const fs = require("fs");

  var fields = Object.keys(users[0]);
  var csv = users.map(function (row) {
    return fields
      .map(function (fieldName) {
        return JSON.stringify(row[fieldName] || "");
      })
      .join(",");
  });
  csv.unshift(fields.join(",")); // add header column
  csv = csv.join("\r\n");

  fs.writeFile("users.csv", csv, function (err) {
    if (err) throw err;
    console.log("File saved!");
  });
});
