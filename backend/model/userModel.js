const mongoose= require("mongoose")
const jwt= require("jsonwebtoken")


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
module.exports = mongoose.model("user", userSchema);


userSchema.methods.getJWTToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
    console.log("process.env.JWT_SECRET",process.env.JWT_SECRET)
    // this.tokens = this.tokens.concat({ token: token })
    this.save()

    return token

}