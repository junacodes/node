const express = require("express");
const { profileRegister } = require("../controllers/profileControllers");
const router = express.Router()

router.post("/create", profileRegister);
module.exports = router;