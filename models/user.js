const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user: {
        type: String,
        required: true
    },
    books: [{
        type: Object
    }],
    videos: [{
        type: Object
    }],
    courses: [{
        type: Object
    }],
    questions: [{
        type: Object
    }],
    references: [{
        type: Object
    }]
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;