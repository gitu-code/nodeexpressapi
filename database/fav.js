var mongoose = require('mongoose');
const { model } = require('./user');
const schema = mongoose.Schema;

const Favschema = new schema ({
    Instr: {
        type: String
    },
    Bid: {
        type: String
    },
    Ask: {
        type: String
    },
    image: {
        type: String
    },
    cur_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('FAV',Favschema )