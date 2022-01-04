const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://mango:alma11@cluster0.jtduh.mongodb.net/mern-crud?retryWrites=true&w=majority')
.then( ()=> {console.log('Sikeres csatlakozás az adatbázishoz!\n')} )
.catch( (error) => {console.log(error.message)} );

app.use(express.json());
app.use(cors());
app.use('/book', require('./routes/BookRoute'));

app.listen(5000, console.log("\n_______________________________________\n\n\tNaon szalajt a szerver!\n_______________________________________\n"));