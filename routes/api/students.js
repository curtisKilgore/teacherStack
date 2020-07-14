const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Student = require('../../models/Student');

//@route    GET api/students
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Student Route'));

module.exports = router;
