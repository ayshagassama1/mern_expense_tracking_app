const express = require('express');
const router = express.Router();


const {registerUser, authUser}  = require('../controllers/userController');

router.route("/").post(registerUser);
router.route("/login").post(authUser);
/* N'oubliez pas que le segment de route indiqué ici est uniquement le segment final, car le reste de l'adresse de la route sera déclaré dans notre application Express.*/
/*router.post('/signup',userController.signup, (req, res, next) => {
    //res.render("user",{ users: req.data});
});
router.post('/login',userController.login , (req, res, next) => {
    res.render("user",{ users: req.data});
});

router.get("/", userController.getAllUser,  (req, res, next) => {
    res.render("user",{ users: req.data});
});*/


module.exports = router;