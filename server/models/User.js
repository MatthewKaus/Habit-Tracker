const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// schemas connected to User
const badHabitSchema = require('./BadHabits')
const goalSchema = require('./Goals')
const journalSchema = require('./Journal')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        badHabits: [badHabitSchema],
        goals: [goalSchema],
        journal: [journalSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectpassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;