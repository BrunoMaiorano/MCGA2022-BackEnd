const express = require('express')

const router = express.Router();
const productsRoutes = require('./productsRoutes')
const providersRoutes = require("./providersRoutes");

router.use('/api/products', productsRoutes)
router.use("/api/providers", providersRoutes);

module.exports = router;