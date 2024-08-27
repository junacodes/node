const mongoose = require("mongoose")
// const schema = mongoose.schema;
const profileSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true
        },
        lastName: {
            type:String,
            required: true

        },

        email:{
            type:String,
            required: false
        }, 


        phone: {
            type:String,
            required: true
        },

        address:{
            type:String,
            required: false

        },
        // isAdmin:{
        //     type:Boolean,
        //     required:true,
        //     default:false


        // }

        userRole:{
            type:String,
            enum : ["user", "admin", "superAdmin"],
            required: true,
            default: "user",
        }
    },
        {
            timestamps:true
        }

    
);
const profile = mongoose.model("profile", profileSchema);
module.exports = profile
