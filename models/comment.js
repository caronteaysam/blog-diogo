const mongoose = require ( 'mongoose' );

const { Schema } = mongoose;

const comment_schema = new Schema ( {
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    comment_date: {
        type: Date,
        required: true
    }
} );

module.exports = mongoose.model ( 'Comment', comment_schema );