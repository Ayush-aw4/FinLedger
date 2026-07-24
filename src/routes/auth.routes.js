const express = require('express');
const {userRegisterController,userLogin,userLogoutController} = require("../controllers/auth.controller.js")

const router = express.Router();

router.post("/register",userRegisterController)

router.post("/login",userLogin)

router.post("/logout", userLogoutController)
module.exports = router