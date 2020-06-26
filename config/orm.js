var connection = require("../config/connection");
// create the methods that will execute the necessary MySQL commands in the controllers
var orm = {
  // select all from tableInput
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // insert into table / column burger value
  // give priority to col name and burger
  insertOne: function (tableInput, colName, burgerName, cb) {
    queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, colName, burgerName], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  // update table and set column with devoured boolean by id
  updateOne: function (tableInput, colName, devoured, id, cb) {
    queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(
      queryString,
      [tableInput, colName, devoured, id],
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
