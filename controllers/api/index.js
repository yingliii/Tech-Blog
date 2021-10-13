// COMMENT require router
const router = require('express').Router();
// COMMENT request routes
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
