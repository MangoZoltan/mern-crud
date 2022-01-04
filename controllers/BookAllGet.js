const BookModel = require('../models/Book');

const BookAll = async (req, res) => {
    try{
        const result = await BookModel.find({}, {'__v': 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
};

module.exports = BookAll;