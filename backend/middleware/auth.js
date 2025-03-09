const userModel = require("../model/userModel.js");

const jwt = require("jsonwebtoken");

 const isAuthenticatedUser = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "login user access this step",
                token

            })
        }
        // console.log("ttt", token)
        const decdedData = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await userModel.findById(decdedData.id)
        // res.status(200).send({
        //     success: true,
        //     message: " user login Successfully",
        // })
        next()

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in  user not login",
            error
        })
    }
}

const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(401).send({
                success: false,
                message: "User can't accss for this rsource",

            })
        }
        next()
    }
}

module.exports={
    isAuthenticatedUser,authorizeRoles
}
