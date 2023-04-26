const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:String,
    first_name: String,
    last_name: String,
    email:{
        type: String,
        index: true,
        unique: true,
      },
    gender: String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String
})
module.exports = mongoose.model('users', userSchema)