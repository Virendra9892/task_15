var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/categoryController")

/* GET users listing. */
router.post('/setCat', categoryController.setCategory);
router.get('/getCat',categoryController.getCategory);
router.delete('/delCat',categoryController.deleteCategory);

module.exports = router;
