const express =require("express");
const authController= require("../controllers/auth");

const router =express.Router();

router.post("/signup", authcontroller.signUp);
router.post("/login", authcontroller.login);

module.exports = router;

