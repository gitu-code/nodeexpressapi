var mongoose = require('mongoose');
const { model } = require('./user');
var schema = mongoose.Schema;

var closeOrderSchema = new schema({
    Type: {
        type: String
    },
    volume: {
        type: String
    },
    open_price: {
        type: String
    },
    open_time: {
        type: String
    },
    commission: {
        type: String
    },
    swap: {
        type: String
    },
    s_l: {
        type: String
    },
    t_p: {
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

module.exports = mongoose.model('close_order', closeOrderSchema)