const express = require('express');
const router = express.Router();

const controllerProduct=require('../controller/controllerProduct');

router.get('/', controllerProduct.productos);
router.get('/create', controllerProduct.create);

router.get('/edit/:id', controllerProduct.edit);
router.put('/edit/:id', controllerProduct.update);

router.get('/:id', controllerProduct.productDetail);
module.exports=router;