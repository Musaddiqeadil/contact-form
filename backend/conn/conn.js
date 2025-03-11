const mongoose = require('mongoose');

const conn = async () => {
    try {
        mongoose.connect('mongodb+srv://musaddiqeadil:tshbuBI4LIwHPhbS@cluster0.vnfun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log("mongoDB connection successful");
        }, (error) => {
            console.log("mongoDB connection failed");
            console.log("error");
        });
    } catch (error) {
        console.log("error")
        
    }
};

conn();