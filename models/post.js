const mongoose = require ( 'mongoose' );

const { Schema } = mongoose;

const post_schema = new Schema ( {
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    post_date: {
        type: Date,
        required: true
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Comment'
        }
    ]
} );

module.exports = mongoose.model ( 'Post', post_schema );