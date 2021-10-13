const mongoose = require("mongoose")
const {Schema} = mongoose;

const ClientModel = new Schema({
    fullname: String,
    document: Number,
    email: String,
    phone: Number,
    product: String,
    coment: String
})

module.exports = mongoose.model('clients', ClientModel);