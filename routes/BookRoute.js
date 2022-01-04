const express = require('express');
const router  = express.Router();

const BookAll = require('../controllers/BookAllGet');
const BookPostOne = require('../controllers/BookAllPost');


//Mindent lekérünk endpoint.
router.get('/', async (req, res) => {
    try{
        const result = await BookModel.find({}, {'__v': 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});

router.post('/tolt', async (req, res) => {
    try{
        const body = req.body;
        const newBook = new BookModel(body);

        await newBook.save();
        res.send(newBook);
    }catch(error){
        res.send(error.message);
    }
});


// Egy elem lekérdezése

// Egy elem frissítése

// Egy elem törlése
//router.delete('/torol/:id');

module.exports = router;