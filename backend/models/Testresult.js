const mongoose = require('mongoose')
const TestSchema = new mongoose.Schema({
        
    date: {
        type: Date,
        required: true
        },

    testres: {
        type: String,
        required: true,
    }, 
    testvalue: {
        type: String,
        required: true,
    }, 

});


const Testresult = mongoose.model("test", TestSchema)
module.exports = Testresult

