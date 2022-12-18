const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isAuthenticatedUser = async (req, res, next) => {
  try {
  const token = req.cookies.authToken;
  console.log("token1", token);
  const { authToken } = req.body 
  let token1 = authToken
  console.log("token", token1)
  if(!token || token === undefined) {
    return res.status(401).json({
      success: false,
      message: "Please Login to use this utility."
  })
  }
  const decoded_token = await jwt.verify(token, process.env.SECRET_KEY);
  
  const user = await userModel.findById(decoded_token.id);

  if(!user) {
    return res.status(200).json({
      success: true,
      message: "User Not Found"
    })
  }

  req.user = user;
  next();
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: error.message,
      name: error.name
    })
  }
  
};

module.exports = isAuthenticatedUser;
