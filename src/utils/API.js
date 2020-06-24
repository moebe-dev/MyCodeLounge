import axios from "axios";

export default {
    getYoutubeVideos: function(topic=null) {
        // return 5 youtube videos with title, link, description, image
        // if no topic provided, will default to "full stack development"
        return axios.get("/api/youtube/getvideos", {params: { topic: topic }});
    },

    getW3Reference: function(topic) {
        // will return all W3 reference links with subtopic and link
        // must provide topic, else error
        if (topic) return axios.get("/api/w3schools/" + topic);
        else throw Error("W3 Schools search reference must be provided")
    },

    getGoogleBooks: function(topic=null) {
        // return 5 google books with title, link, description, image
        // if no topic provided, will default to "full stack development"
        return axios.get("/api/googlebooks/getbooks", {params: { topic: topic }});
    },

    getUdemyCourses: function(topic=null) {
        // WIP - source return similar to youtube/google books
        return axios.get("/api/udemy/getcourses", {params: { topic: topic }});
    },

    searchStackOverFlow: function(question) {
        // return stack over flow answers with title, link, description, and image
        // must pass a question else it will fail
        if (question) return axios.get("/api/stackoverflow/ask", {params: { question: question }});
        else throw Error("Question must be provided to submit to Stack Overflow API");
    },

    // need to implement - used to save specific book/video/course/question/w3 ref to user provide in mongodb
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