var express = require("express");
var router = express.Router();

var ideController = require("../controllers/ideController");


router.post("cadastrarIde", function(req, res){
    ideController.cadastrar(req, res);
});

router.get("/listar",function(req, res){
    ideController.listar(req, res);
});


module.exports = router;