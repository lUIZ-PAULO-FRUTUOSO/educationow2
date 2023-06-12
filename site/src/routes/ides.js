var express = require("express");
var router = express.Router();

var ideController = require("../controllers/ideController");


router.post("/votarIde/:idIde", function(req, res){
    ideController.votarIde(req, res);
});




module.exports = router;