const db = require("../models");
const axios = require("axios");

module.exports = {
  // find all books
  getBooks: function (req, res) {
    console.log("inside getBooks");
    let searchValue = "full%20stack%20development";
    const queryUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=30&&q=" + searchValue;
    axios.get(queryUrl).then((response) => {
      let books = response.data.items;
      let results = [];
      console.log(books);
      for (let x = 0 ; x <= 4 ; x ++ ) {
        let randomIndex = Math.floor(Math.random() * books.length);
        results.push({
          title: books[randomIndex].volumeInfo.title,
          description: books[randomIndex].volumeInfo.description,
          image: books[randomIndex].volumeInfo.imageLinks.thumbnail,
          link: books[randomIndex].volumeInfo.infoLink
        });
        books.splice(randomIndex, 1);
      }
      res.json(results);
    });
  },

  saveBookToUsers: function (req, res) {
    // db.User.create book under user name here
    res.json("saving book");
  }
};
