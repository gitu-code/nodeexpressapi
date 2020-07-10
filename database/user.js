var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userRegisterSchema = new schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    country: {
        type: String
    },
    DOB: {
        type: String
    },
    phone: {
        type: String
    },
    accountCurrency: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    accountType: {
        type:String
    },
    password: {
        type: String
    },
    cur_date: {
        type:Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('user', userRegisterSchema)