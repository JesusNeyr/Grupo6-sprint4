const express = require('express');
const router = express.Router();
const controllerAdmin = require('../controller/controllerAdmin')

router.get('/', controllerAdmin.index);
router.get('/stock', controllerAdmin.stock);
router.get('/productAdd', controllerAdmin.addProduct);
router.get('/products', controllerAdmin.ListProduct);
router.get('/changeProduct', controllerAdmin.changeProduct);

module.exports = router;