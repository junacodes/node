


// controller for create user registration
const User= require("../models/useModel");
const userRegister = async (req, res) => {
    const data = req.body;
    // const name = data.name


if(!data.email || !data.password){
   return res.status(400).json({msg:"please enter your email and password"});
};
try {
    const user = await User.findOne({ email: data.email });
    if (user) {
       return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      name: data.name,
      email: data.email,
      password: data.password,
      userRole: data.userRole,
    });
    const response = await newUser.save();
    return res.status(201).json({msg: "user registered successfully  ", user: response });

 }
 catch(err){
    console.log(err);
    res.status(500).json({msg:"server error", error: err})
 }
};

 module.exports = {userRegister};
