import mongoose from "mongoose";

const wishesSchema = mongoose.Schema({
    name:{
        type:String
    },
    wish:{
        type:String
    },
    image:{
        type:Object
    },
    song:{
        type:String
    },
    songStartTime:{
        type:String
    },
    params:{
        type:String
    }
})

const Wishes = mongoose.model('Wishes',wishesSchema)
export default Wishes