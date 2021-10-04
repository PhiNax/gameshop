// Call mongoose module
const mongoose = require('mongoose');

// Database Conection
mongoose.connect('mongodb://localhost/gameshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected!")
    console.log("--------------------")
    /*const quotes = Game.find();
    console.log(quotes)*/
}).catch(err => {
    console.log(Error, err.message);
});
