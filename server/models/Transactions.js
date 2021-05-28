const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true , "please add some text"]
    },
    amount:{
        type:Number,
        required:[true , "please enter positive or negative number"]
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

const Transaction = mongoose.model("Transaction" , transactionSchema)

module.exports = Transaction