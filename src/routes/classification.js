const router = require("express").Router();
const classification = require("../controllers/classification");

router.post("/classification/get", classification.get);

module.exports = router;
