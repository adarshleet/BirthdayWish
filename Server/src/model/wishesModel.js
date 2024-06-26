import mongoose from "mongoose";

const wishesSchema = mongoose.Schema({
    name:{
        type:String
    },
    wishDetails:{
        type:String
    },
    image:{
        type:String
    },
    song:{
        type:String
    },
    songStartTime:{
        type:String
    }
})

const Wishes = mongoose.model('Wishes',wishesSchema)
export default Wishes