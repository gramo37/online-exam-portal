const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const sendToken = async (res, user, statusCode) => {
    // Generate Token and send

    

    let token = await jwt.sign(({id: user._id}), process.env.SECRET_KEY, { expiresIn: '24h' });
    res.cookie("authToken", token, {expire: process.env.COOKIE_EXPIRE + Date.now()}).status(statusCode).json({
        success: true,
        token
    })
}

module.exports = sendToken;