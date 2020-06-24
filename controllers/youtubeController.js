const axios = require("axios");

module.exports = {
  // find all books
  getVideos: function (req, res) {
    console.log("inside getVideos");
    const searchTopic = req.query.topic ? req.query.topic.replace(/\s/, "%20") : "full%20stack%20develoment";
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=" + searchTopic + "&type=video&key=AIzaSyCigK945eyJAItwigHVvdihdi4x9NcRv4k"
      )
      .then((response) => {
        let videos = response.data.items;
        let results = [];
        
        for (let x = 0 ; x <= 4 ; x++ ) {  // get 5 random videos from 30 total
            let randomIndex = Math.floor(Math.random() * videos.length); 
            results.push({
                title: videos[randomIndex].snippet.title,
                description: videos[randomIndex].snippet.description,
                image: videos[randomIndex].snippet.thumbnails.medium.url,
                link: "https://www.youtube.com/embed/" + videos[randomIndex].id.videoId
            });
            videos.splice(randomIndex, 1);
        }
        res.json(results);
      })
      .catch(err => console.log(err));    
  },
};
