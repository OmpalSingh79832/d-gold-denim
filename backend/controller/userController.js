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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ email });

        // If user not found
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare entered password with the hashed password in the database
        const isPasswordMatch = await user.comparePassword(password);

        // If password does not match
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = user.getJWTToken();

        // Send response with the token
        return res.status(200).json({
            message: "User Login successfully",
            success: true,
            token
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports ={
  register,login
}