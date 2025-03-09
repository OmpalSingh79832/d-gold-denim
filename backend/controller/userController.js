const userModel = require("../model/userModel");


const register = async(req, res)=>{
  try {
    const {
     name,
     email,
     password
    } = req.body;

    // Create the product in the database
    const user = await userModel.create({
    name,
     email,
     password
    });

    return res.status(201).json({
      message: "User Register successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



const login = async(req, res)=>{
  try {
    const {
     
     email,
     password
    } = req.body;

const user =await userModel.findOne({email,password})

 await user.save ()
    return res.status(201).json({
      message: "User Login successfully",
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports={
    register,
    login
}
