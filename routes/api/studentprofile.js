const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const StudentProfile = require('../../models/StudentProfile');

//@route    GET api/studentprofile
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Student Profile Route'));

module.exports = router;
