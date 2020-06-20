const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    User: {
        type: String,
        required: true
    },
    books: [{
        type: String,
        required: true
    }],
    videos: [{
        type: String,
        required: true
    }],
    courses: [{
        type: String,
        required: true
    }],
    questions: [{
        type: String,
        required: true
    }],
    references: [{
        type: String,
        required: true
    }]
});

const Books = mongoose.model("Users", userSchema);

module.exports = Books;