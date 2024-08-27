const mongoose = require("mongoose");
const profileUser= require("../models/userprofile");

const profileRegister = async (req, res) => {
    const data = req.body;
    // const name = data.name


if( !data.firstName||!data.lastName ||  !data.email || !data.phone || !data.address){
   return res.status(400).json({msg:"please enter your email and password"});
};
try {
   
   const userProfile = await profileUser.findOne({ email: data.email });
    if (userProfile) {
       return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new  profileUser({
      firstName: data.firstName,
      lastName : data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });
    const response = await newUser.save();
    return res.status(201).json({msg: "Profile created successfully"  ,  response });

 }
 catch(err){
    console.log(err);
    res.status(500).json({msg:"server error", error: err})
 }
};


module.exports = {profileRegister};
