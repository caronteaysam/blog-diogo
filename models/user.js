const mongoose = require ( 'mongoose' );
const unique_validator = require ( 'mongoose-unique-validator' );

const { Schema } = mongoose;

const user_schema = new Schema ( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        type: String,
        required: false
    },
    user_date: {
        type: Date,
        required: true
    },
    posts: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Post'
        }
    ]
} );

user_schema.plugin ( unique_validator );

module.exports = mongoose.model ( 'User', user_schema );