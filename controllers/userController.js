const db = require("../models");
const axios = require("axios");

module.exports = {
  // find all books
  saveItem: function (req, res) {
      console.log("saving item to user");
      
      // $push is not friendly when the key is a variable - this is the workaround
      var query = {};
      query[req.body.type] = req.body.data;

      db.Users.updateOne({ user: req.body.user }, { $addToSet: query }, { upsert: true, setDefaultsOnInsert: true })
        .then(dbItem => {
          console.log(dbItem);
          res.json(dbItem)
        })
        .catch(err => console.log(err));
  },

  getItem: function (req, res) {
    console.log("retrieving " + req.query.type + " for " + req.query.user);

    db.Users.findOne({ user: req.query.user })
      .then(dbItem => res.json(dbItem[req.query.type]))
      .catch(err => console.log(err));
  },

  getAllItems: function (req, res) {
    console.log("retrieving all items for " + req.query.user);

    db.Users.findOne({ user: req.query.user })
      .then(dbItems => res.json(dbItems))
      .catch(err => console.log(err));
  },

  removeItem: function (req, res) {
    console.log("removing item from user");
    // $push is not friendly when the key is a variable - this is the workaround
    var query = {};
    query[req.body.type] = { title: req.body.title };

    db.Users.updateOne({ user: req.body.user }, { $pull: query })
    .then(dbItem => {
      console.log(dbItem);
      res.json(dbItem)
    })
    .catch(err => console.log(err));
    console.log(req.body)
  }
};
