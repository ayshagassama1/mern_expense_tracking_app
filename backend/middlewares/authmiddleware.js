const  jwt = require('jsonwebtoken');
const User = require("../models/userModels");
const asyncHandler  = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
    
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }

  

    

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            
            //decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await  User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error ("Not authorized, token failed")
        }
    }

    if(!token ) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

module.exports = { protect};