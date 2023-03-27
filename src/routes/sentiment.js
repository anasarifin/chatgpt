const router = require("express").Router();
const sentiment = require("../controllers/sentiment");

router.post("/sentiment/get", sentiment.get);

module.exports = router;
