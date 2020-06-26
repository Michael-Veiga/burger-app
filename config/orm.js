var connection = require("../config/connection");
// create the methods that will execute the necessary MySQL commands in the controllers
var orm = {
  // select all from tableInput
  selectAll: function (tableInput, callback) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // insert into table / column burger value
  // give priority to col name and burger
  insertOne: function (tableInput, colName, burger_name, callback) {
    queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, colName, burger_name], function (
      err,
      result
    ) {
      if (err) throw err;
      callback(result);
    });
  },
  // update table and set column with devoured boolean by id
  updateOne: function (tableInput, colName, devoured, id, callback) {
    queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(
      queryString,
      [tableInput, colName, devoured, id],
      function (err, result) {
        if (err) throw err;
        callback(result);
      }
    );
  },
};

module.exports = orm;
