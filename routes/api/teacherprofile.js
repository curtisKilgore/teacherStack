const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const TeacherProfile = require('../../models/TeacherProfile');

//@route    GET api/teacherprofile
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Teacher Profile Route'));

module.exports = router;
