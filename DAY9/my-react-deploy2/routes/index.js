var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.send("public/build/index.html");
	// res.send(path.join(__dirname, "public/build/index.html"));
});

// router.get("/react", function (req, res, next) {
// 	res.send("public/build/index.html");
// 	// res.send(path.join(__dirname, "public/build/index.html"));
// });

router.get("*", function (req, res, next) {
	res.send("public/build/index.html");
	// res.send(path.join(__dirname, "public/build/index.html"));
});
module.exports = router;
