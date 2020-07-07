const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Teacher = require('../../models/Teachers');

//@route    GET api/teachers
//@desc     Register Teacher
//@access   Public
router.get('/', (req, res) => res.send('Teacher Route'));

module.exports = router;

//@route    POST api/teachers
//@desc     Register Teacher
//@access   Public

// router.post('/', [
//     check('name', 'Name is required').not().isEmpty(),
//     check('email', 'Please include a valide email').isEmail(),
//     check('password', 'Please enter a password with 6 or more characters').isLength({ min : 6 })
// ], async (req, res) => {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors: errors.array()})
//     }
// })
