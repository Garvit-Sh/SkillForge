const express = require("express");
const router = express.Router();
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/login", login);
export default router;
