const axios = require("axios");

module.exports = {
  askQuestion: function (req, res) {
    let question = req.query.question.replace(/\s/g, "%20");
    let queryUrl =
      "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=" +
      question +
      "&site=stackoverflow&accepted=True";

    axios.get(queryUrl).then((response) => {
      let answers = response.data.items;
      let results = [];
      for (let x = 0; x <= 4; x++) {
        results.push({
          title: answers[x].title,
          description: "Answer to question: " + req.query.question,
          image:
            "https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png",
          link: answers[x].link,
        });
      }
      res.json(results);
    });
  },
};
