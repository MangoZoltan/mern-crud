const BookModel = require('../models/Book');

const BookPostOne = async (req, res) => {
    try{
        const body = req.body;
        const newBook = new BookModel(body);

        await newBook.save();
        res.send(newBook);
    }catch(error){
        res.send(error.message);
    }
};

module.exports = BookPostOne;