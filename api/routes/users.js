const express = require("express");
const router = express.Router();


const chechAuth= require('../middleware/check-auth');

const UserController = require('../controllers/user');


router.post("/signup", UserController.user_signup);

  router.post('/login', UserController.user_login);
        

  router.delete("/:userId", chechAuth ,UserController.user_delete_user);
  module.exports = router;