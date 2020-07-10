var mongoose = require('mongoose')
var schema = mongoose.Schema;

var countrySchema = new schema({
    instr: {
        type: String
    },
    type: {
        type: String
    },
    volume: {
        type: String
    },
    profit: {
        type: String
    },
    open_time: {
        type: String
    },
    open_price: {
        type: String
    },
    commission: {
        type: String
    },
    take_profit: {
        type: String
    },
    stop_loss: {
        type: String
    },
    swap: {
        type: String
    },
    img_flag: {
        type: String
    },
    cur_date: {
        type:Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('country', countrySchema)