const dotenv = require("dotenv");
const NewsAPI = require("newsapi");

module.exports = {
  getNews: function (req, res) {
    dotenv.config();
    const newsapi = new NewsAPI(process.env.GOOGLE_NEWS_API_KEY);
    const searchTopic = req.query.topic
      ? req.query.topic.replace(/\s/, "%20")
      : "full stack development";
    newsapi.v2
      .everything({
        q: searchTopic,
        from: "2020-06-20",
        language: "en",
        sortBy: "relevancy",
        pageSize: "100",
      })
      .then((response) => {
        let articles = response.articles;
        let results = [];
        for (let x = 0; x < 4; x++) {
          let randomIndex = Math.floor(Math.random() * 50);
          const { title, description, url, urlToImage } = articles[randomIndex];

          results.push({
            title: title,
            description: description,
            image: urlToImage,
            link: url,
          });
          articles.splice(randomIndex, 1);
        }
        res.json(results);
      });
  },
};
