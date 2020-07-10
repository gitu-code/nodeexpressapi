var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BalanceSchema = new schema({
    Equity: {
        type: String
    },
    Margin: {
        type: String
    },
    Level: {
        type: String
    },
    Free: {
        type: String
    },
    Credit: {
        type: String
    },
    Profit: {
        type: String
    },
    cur_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports= mongoose.model('Balance', BalanceSchema)