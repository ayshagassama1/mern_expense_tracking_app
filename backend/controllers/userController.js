const bcrypt = require('bcrypt'); // pour le cryptage du mot de passe

const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const generateToken = require("../utils/generateToken");


const authUser = asyncHandler(async (req, res, next) => {
  const {email, password} = req.body;

  const user = await User.findOne({ email});

  if(user && (await user.matchPassword(req.body.password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

});


const registerUser = asyncHandler(async (req, res) => {
  const {firstName,lastName, email, password} = req.body;

  const userExists = await User.findOne({email});

  if(userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if(user) {
    //user.save();
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
    console.log(res);
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

const listUser =  asyncHandler(async (req, res, next) => {
  User.find({}, (error, users) => {
      if(error) throw error;
      req.data = users;
      next();
  });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

module.exports ={ registerUser,authUser, updateUserProfile};


/*const authUser = asyncHandler(async (req, res, next) => {
  const {firstName,lastName,email, password} = req.body;
  User.findOne({ email })
  .then(user => {
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin
        });
      })
      .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));

});*/






/*exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));

};


exports.getAllUser  = (req, res,next) =>{
  User.find({}, (error, users) => {
      if(error) throw error;
      req.data = users;
      next();
  });
};*/
//const User = require('../models/user');

/*exports.createUser = (req, res, next) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    });
    user.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
        next();
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };*/
  

/*exports.getOneUser= (req, res, next) => {
    User.findOne({
      _id: req.params.id
    }).then(
      (user) => {
        res.status(200).json(user);
        next();
      }
      
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

exports.modifyUser = (req, res, next) => {
    const user = new Thing({
      _id: req.params.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    });
    user.updateOne({_id: req.params.id}, user).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
        next();
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.deleteUser =  (req, res, next) => {
  User.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
      next();
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};



/*exports.getAllUser = (req, res, next) => {
    User.find().then(
      (users) => {
        res.status(200).json(users);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };*/
  