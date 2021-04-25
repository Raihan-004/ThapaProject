const mongoose = require("mongoose");
const validator = require('validator');

const schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLeangth : 3
    },
    email : {
        type : String,
        required : true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone : {
        type : Number,
        required :true, 
        minLeangth: 11
    },
    message : {
        type : String,
        required : true,
        minLeangth : 5
    },
    date :{
        type:Date,
        default:Date.now
    }
})

const User = mongoose.model("User",schema);

module.exports = User;