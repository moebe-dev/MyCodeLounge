const db = require("../models");

module.exports = {
  saveItem: function (req, res) {
    var query = {};
    query[req.body.type] = req.body.data;

    db.Users.updateOne(
      { user: req.body.user },
      { $addToSet: query },
      { upsert: true, setDefaultsOnInsert: true }
    ).then((dbItem) => {
      res.json(dbItem);
    });
  },

  getItem: function (req, res) {
    db.Users.findOne({ user: req.query.user }).then((dbItem) =>
      res.json(dbItem[req.query.type])
    );
  },

  getAllItems: function (req, res) {
    db.Users.findOne({ user: req.query.user }).then((dbItems) =>
      res.json(dbItems)
    );
  },

  removeItem: function (req, res) {
    var query = {};
    query[req.body.type] = { title: req.body.title };

    db.Users.updateOne({ user: req.body.user }, { $pull: query }).then(
      (dbItem) => {
        res.json(dbItem);
      }
    );
  },
};
