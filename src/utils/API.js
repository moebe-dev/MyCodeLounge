import axios from "axios";

export default {
    getYoutubeVideos: function() {
        return axios.get("/api/youtube/getvideos");
    }




    // get all the books
    // getExample: function() {
    //     return axios.get("/api/route");
    // },
    // save a new book to mongodb
    // postExample: function(data) {
    //     return axios.post("/api/route", data);
    // }
};