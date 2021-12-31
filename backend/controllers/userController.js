const bcrypt = require('bcrypt'); // pour le cryptage du mot de passe

const User = require('../models/user');

exports.signup = (req, res, next) => {
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

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          userId: user._id,
          token: 'TOKEN'
        });
      })
      .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));

};

exports.getAllUser  = (req, res,next) =>{
  User.find({}, (error, users) => {
      if(error) throw error;
      req.data = users;
      next();
  });
};
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
  