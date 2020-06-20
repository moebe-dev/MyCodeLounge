import axios from "axios";

export default {
    getYoutubeVideos: function() {
        return axios.get("/api/youtube/getvideos");
    },

    getW3Reference: function(topic) {
        return axios.get("/api/w3schools/" + topic);
    },

    getGoogleBooks: function(topic) {
        return axios.get("/api/googlebooks/getbooks");
    },

    getUdemyCourses: function() {
        return axios.get("/api/udemy/getcourses");
    },

    searchStackOverFlow: function(question) {
        return axios.get("/api/stackoverflow/ask", {params: { question: question }});
    },

    saveBookToUser: function(data) {
        return axios.post("/api/googlebooks/savebook");
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