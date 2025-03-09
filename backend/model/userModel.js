const mongoose= require("mongoose")
const jwt= require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
     email:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    },
})

// Hash password before saving
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    
    // Hash the password with 10 salt rounds
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to generate JWT Token
userSchema.methods.getJWTToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
    return token;
};

// Compare password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("user", userSchema);



