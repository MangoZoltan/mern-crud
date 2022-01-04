const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    author : {
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    }
}, { timestamps: true });

const BookModel = mongoose.model('books', BookSchema);


module.exports = BookModel;