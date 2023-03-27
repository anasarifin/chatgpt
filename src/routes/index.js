const router = require("express").Router();
const classification = require("./classification");
const sentiment = require("./sentiment");

router.use("/", classification);
router.use("/", sentiment);

module.exports = router;
