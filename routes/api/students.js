const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Student = require('../../models/Student');

// Gets a user's profile
//@route    GET api/students/:student_id
//@desc     Get profile by student ID
//@access   Public

router.get('/:student_id', async (req, res) => {
  try {
    const student = await Student.findOne({
      _id: req.params.student_id
    });
    console.log(student);
    if (!student)
      return res.status(400).json({ msg: 'Student was not found.' });

    res.json(student);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Student not found.' });
    }
    res.status(500).json('Server Error');
  }
});

// Gets a user's profile
//@route    GET api/students/:student_id
//@desc     Get profile by student ID
//@access   Public

router.put('/:student_id', auth, async (req, res) => {
  const { learningstrats, bio, goals } = req.body;

  console.log(req.body);

  const profileFields = {};

  if (learningstrats) profileFields.learningstrats = learningstrats;
  if (bio) profileFields.bio = bio;
  if (goals) profileFields.goals = goals;

  try {
    const student = await Student.findOneAndUpdate(
      {
        _id: req.params.student_id
      },
      { $set: profileFields },
      { new: true }
    );
    console.log(student);
    if (!student)
      return res.status(400).json({ msg: 'Student was not updated.' });

    res.json(student);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Student not found.' });
    }
    res.status(500).json('Server Error');
  }
});

module.exports = router;
