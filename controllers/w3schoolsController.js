const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  // find all books
  getTopics: function (req, res) {
    console.log("inside w3 schools");
    const topic = req.params.topic;
    axios.get("https://www.w3schools.com/" + topic + "/default.asp").then(response => {
            var $ = cheerio.load(response.data);
            let results = [];

            $("#leftmenuinnerinner").find("a").attr("target", "_top").each((i, element) => {
                // grab title, link, summary, img and set active to true
                let subtopic = $(element).text();
                let href = $(element).attr("href");
                // some routes are treated differently, if starts with "/", thats the route, otherwise build it with the topic
                if (href.startsWith("/")) {
                    href = "https://www.w3schools.com/" + href;
                } else {
                    href = "https://www.w3schools.com/" + topic + "/" + href;
                }

                if (subtopic && href) {
                    results.push({
                        subtopic: subtopic,
                        href: href
                    });
                }
            });
            res.json(results);
        });
  },
};
