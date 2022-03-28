const mongoose = require('mongoose')

const feedSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Feed', feedSchema);