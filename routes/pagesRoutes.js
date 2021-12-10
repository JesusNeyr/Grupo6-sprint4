const express = require('express');
const router = express.Router();
const controllerPages = require('../controller/controllerPages')

router.get('/', controllerPages.home);
router.get('/login', controllerPages.login);
router.get('/register', controllerPages.register);
router.get('/carrito', controllerPages.carrito);
router.get('/contacto', controllerPages.contacto);
router.get('/productDetail', controllerPages.productDetail);
router.get('/productos', controllerPages.productos);
router.get('/quienes-somos', controllerPages.somos);



module.exports = router;