var orm = require("../config/orm");

var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },

  insertOne: function (burger_name, callback) {
    orm.insertOne("burgers", "burger_name", burger_name, function (res) {
      callback(res);
    });
  },
  // updateOne: function (burger_id, callback) {
  //   orm.updateOne("burgers", "devoured", true, burger_id, function (res) {
  //     callback(res);
  //   });
  // },
};
module.exports = burger;
