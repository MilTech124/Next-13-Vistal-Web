import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    login:{
        required:[true],
        type:String,
        unique:true,
        trim:true

    },
    password:{
        required:[true],
        type:String,
        trim:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
    

})

const User = mongoose.models.User || mongoose.model('User',userSchema)

export default User