import axios from "axios";

export default {
    getYoutubeVideos: function(topic=null) {
        return axios.get("/api/youtube/getvideos", {params: { topic: topic }});
    },

    getW3Reference: function(topic) {
        if (topic) return axios.get("/api/w3schools/" + topic);
        else throw Error("W3 Schools search reference must be provided")
    },

    getGoogleBooks: function(topic=null) {
        return axios.get("/api/googlebooks/getbooks", {params: { topic: topic }});
    },

    getUdemyCourses: function(topic=null) {
        return axios.get("/api/udemy/getcourses", {params: { topic: topic }});
    },

    searchStackOverFlow: function(question) {
        if (question) return axios.get("/api/stackoverflow/ask", {params: { question: question }});
        else throw Error("Question must be provided to submit to Stack Overflow API");
    },

    // need to implement
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