const axios = require("axios");
const dotenv = require("dotenv");

module.exports = {
  getCourses: function (req, res) {
    dotenv.config();
    const searchTopic = req.query.topic
      ? req.query.topic.replace(/\s/, "%20")
      : "full%20stack%20development";
    const key64 = Buffer.from(
      process.env.UDEMY_CLIENT_ID + ":" + process.env.UDEMY_CLIENT_SECRET
    ).toString("base64");
    const queryUrl =
      "https://www.udemy.com/api-2.0/courses/?search=" + searchTopic;
    const headerData = {
      Accept: "application/json, text/plain, */*",
      Authorization: "Basic " + key64,
      "Content-Type": "application/json;charset=utf-8",
    };
    axios.get(queryUrl, { headers: headerData }).then((response) => {
      let courses = response.data.results;
      let results = [];

      for (let x = 0; x <= 4; x++) {
        let randomIndex = Math.floor(Math.random() * courses.length);
        const { title, headline, image_240x135, url, price } = courses[
          randomIndex
        ];

        results.push({
          title: title,
          description: headline,
          image: image_240x135,
          link: "https://www.udemy.com" + url,
          price: price,
        });
        courses.splice(randomIndex, 1);
      }
      res.json(results);
    });
  },
};
