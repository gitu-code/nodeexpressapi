var mongoose = require('mongoose');
var schema = mongoose.Schema;

var historySchema = new schema ({
    Instr: {
        type: String
    },
    Type: {
        type: String
    },
    Volume: {
        type: String
    },
    Profit: {
        type: String
    },
    open_time: {
        type: String
    },
    open_price: {
        type: String
    },
    commision: {
        type: String
    },
    Take_profit: {
        type: String,
    },
    spot_loss: {
        type: String
    },
    swap: {
        type: String
    },
    close_time: {
        type:String
    },
    close_price: {
        type: String
    },
    cur_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('history', historySchema);