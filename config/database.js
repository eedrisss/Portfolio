let atlasDB ="mongodb://localhost:27017/BusinessLists";

// Database setup and import from mongoose the module installed
let mongoose = require('mongoose');

//load and export modules as function
module.exports = function(){

    mongoose.connect(atlasDB);
    //get connection
    let mongodb = mongoose.connection;
    //incase of error write error message to console
    mongodb.on('error', console.error.bind(console, 'Error Connection:'));
    //incase of success, then open connection and display message.
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })
    return mongodb;
}