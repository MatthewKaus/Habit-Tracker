const {Schema} = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it for the User's 'goals' array in User.js

const goalSchema = new Schema({
    goalName: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    },
    completion: {
        type: Boolean,
        default: false
    }
});

module.exports = goalSchema;