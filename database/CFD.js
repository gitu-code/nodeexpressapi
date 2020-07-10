var mongoose = require('mongoose');
var schema = mongoose.Schema;

var CfdSchema = new schema({
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

module.exports = mongoose.model('CFD', CfdSchema)