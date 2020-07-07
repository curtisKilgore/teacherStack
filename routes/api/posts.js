const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Post = require('../../models/Post');

//@route    GET api/posts
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Post Route'));

module.exports = router;
