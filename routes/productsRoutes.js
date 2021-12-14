const express = require('express');
const router = express.Router();
const  methodOverride = require('method-override')

const controllerProduct=require('../controller/controllerProduct');
router.get('/create', controllerProduct.create);
router.get('/:id/edit', controllerProduct.edit);

module.exports=router;