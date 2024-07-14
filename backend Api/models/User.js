const mongoose = require('mongoose')
//field
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    email:{
        type:String,
        Required:true
    },
    password:{
        type:String,
        Required:true
    },
    role:{
        type:String,
        default:'user'
    },
    image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      }
},{timestamps:true})

//model
const UserModel = mongoose.model('users',UserSchema)
module.exports = UserModel