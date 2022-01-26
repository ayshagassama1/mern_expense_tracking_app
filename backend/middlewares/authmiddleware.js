const  jwt = require('jsonwebtoken');
const User = require("../models/userModels");
const asyncHandler  = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  const authorization = req.headers['authorization'];
console.log("saly"+authorization );
  if (!authorization) {
    return res.status(200).json({
      status: 0,
      error: "vous n'etes pas autorisé!"
    });
  }

  const token = authorization.replace('Bearer', '');
  
    
  try {

    jwt.verify(token,process.env.JWT_SECRET, async(error, payload) =>{
      if (error) {
        //console.log(error);
        return res.status(200).json({
          status: 0,
          error: "vous n'êtes pas connecté!"
        });
      }
      
      const user = await User.findById(payload.id);
      if(user){
        req.user = user;
        req.token = token;
        return next();
      }
      
      return res.status(200).json({
        status: 0,
        error: "vous n'êtes pas  user!"
      });
      
    });
  } catch (error) {
    return res.status(200).json({
      status: 0,
      error: "Erreur interne!"
    });

  }
});

module.exports = { protect };