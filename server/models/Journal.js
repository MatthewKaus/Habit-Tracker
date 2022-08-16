const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it for the User's 'journal' array in User.js

const journalSchema = new Schema({
    journalTitle: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    },
    journalText: {
        type: string
    }
});

module.exports = journalSchema;