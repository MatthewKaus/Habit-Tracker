const {Schema} = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it for the User's 'badHabits' array in User.js

const badHabitSchema = new Schema({
    habitName: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    },
    amountPerformed: {
        type: Number,
        default: 0
    }
});

module.exports = badHabitSchema;