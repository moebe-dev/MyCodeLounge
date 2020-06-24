// const db = require("../models");
const axios = require("axios");

module.exports = {
  // find all books
  getCourses: function (req, res) {
    console.log("inside getCourses");
    const searchTopic = req.query.topic ? req.query.topic.replace(/\s/, "%20") : "full%20stack%20development";
    console.log(searchTopic);
    // const queryUrl = "";
    // axios.get(queryUrl).then((response) => {
      
    //   res.json();
    // });
  },
};
