const db = require("../models");
const axios = require("axios");

module.exports = {
  // find all books
  getBooks: function (req, res) {
    console.log("inside getBooks");
    const searchTopic = req.query.topic ? req.query.topic.replace(/\s/, "%20") : "full%20stack%20development";
    const queryUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=30&&q=" + searchTopic;
    axios.get(queryUrl).then((response) => {
      let books = response.data.items;
      let results = [];

      for (let x = 0; x <= 4; x++) {
        let randomIndex = Math.floor(Math.random() * books.length);
        const { title, description, infoLink } = books[randomIndex].volumeInfo;
        const image = books[randomIndex].volumeInfo.imageLinks ? books[randomIndex].volumeInfo.imageLinks.thumbnail : false;

        results.push({
          title: title,
          description: description,
          image: image,
          link: infoLink,
        });
        books.splice(randomIndex, 1);
      }
      res.json(results);
    });
  },

  saveBookToUsers: function (req, res) {
    // db.User.create book under user name here
    res.json("saving book");
  },
};
