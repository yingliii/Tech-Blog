const router = require('express').Router();
// TODO rename the routes
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;
